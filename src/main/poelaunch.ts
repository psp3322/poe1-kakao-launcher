import { app, BrowserWindow, dialog } from 'electron'
import * as fs from 'fs'
import { spawn } from 'child_process'
import * as path from 'path'
import { download, CancelError } from 'electron-dl'

export function poeLaunch(win: BrowserWindow, url: string): void {
  // Url Unescape
  const unescapedUrl = decodeURIComponent(url).replace('daumgamestarter://', '')
  console.log('Unescaped Url:', unescapedUrl)

  // '|' Split
  const [gameCode, gameStatus, execute, token, userCode] = unescapedUrl.split('|')
  console.log('Game Code:', gameCode)
  console.log('Game Status:', gameStatus)
  console.log('Execute:', execute)
  console.log('Token:', token)
  console.log('User Code:', userCode)

  const gamePath = 'C:\\Daum Games\\Path of Exile'
  const executeKakao64 = 'PathOfExile_KG.exe'

  if (poeIsInstalled(executeKakao64)) {
    dialog
      .showMessageBox(win, {
        type: 'question',
        buttons: [executeKakao64, `${executeKakao64} (글로벌 버전)`],
        defaultId: 0,
        title: 'Path of Exile',
        message: '어떤 클라이언트로 실행할까요?'
      })
      .then((response) => {
        if (response.response === 0) {
          spawn(`${path.join(gamePath, executeKakao64)}`, ['--kakao', token, userCode], {
            cwd: gamePath
          })
        }
        if (response.response === 1) {
          spawn(`${path.join(gamePath, executeKakao64)}`, {
            cwd: gamePath
          })
        }
        // if (response.response === 2) {
        //   // 폰트 선택창 표시
        //   dialog
        //     .showOpenDialog(win, {
        //       properties: ['openFile'],
        //       filters: [{ name: 'Fonts', extensions: ['ttf'] }],
        //       title: 'Path of Exile 2 폰트 변경',
        //       message: '적용하실 폰트를 선택하세요. 원복은 취소를 해주세요',
        //       defaultPath: 'Z:\\home\\deck\\'
        //     })
        //     .then((result) => {
        //       const fontPath = (result.filePaths && result.filePaths[0]) || ''
        //       // 취소한 경우 폰트 원복 절차 진행
        //       if (result.canceled || fontPath === '') {
        //         // TODO: 폰트 원복
        //         poe2RestoreFont(win)
        //         return
        //       }

        //       // 폰트 변경 진행
        //       poe2ChangeFont(win, fontPath)
        //     })
        // }
      })
  } else {
    // 설치
    poeSetup(win)
      .then(() => {
        // 완료 메시지 출력
        dialog.showMessageBox(win, {
          type: 'info',
          title: 'Path of Exile',
          message: '설치 프로그램이 표시될것입니다. 설치 완료 후 게임 시작 버튼을 다시 클릭하세요'
        })
      })
      .catch((error) => {
        // 에러 메시지 출력
        dialog.showMessageBox(win, {
          type: 'error',
          title: 'Path of Exile',
          message: '설치 중 오류가 발생했습니다. 다시 시도해주세요\n\n' + error.message
        })
      })
  }
}

function poeIsInstalled(execute: string): boolean {
  // 기본 경로에서 설치되어 있는지 여부를 확인
  // C:\Daum Games\Path of Exile
  const installPath = 'C:\\Daum Games\\Path of Exile'

  // 해당 경로에 execute 파일이 있는지 확인
  if (fs.existsSync(path.join(installPath, execute))) {
    return true
  }

  console.log('Path of Exile is not installed')
  return false
}

async function poeSetup(win: BrowserWindow): Promise<void> {
  // 다음 주소에서 클라이언트 설치파일 다운로드, 1로 바꿈
  // https://poe.gdn.gamecdn.net/kg_live/Game/poe/Install/PathOfExile_Setup.exe
  const url = 'https://poe.gdn.gamecdn.net/kg_live/Game/poe/Install/PathOfExile_Setup.exe'

  const targetDir = app.getPath('temp')
  console.log('Target Directory:', targetDir)

  // targetDir 경로가 존재하지 않는 경우 폴더 생성
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  try {
    await download(win, url, {
      directory: targetDir,
      filename: 'PathOfExile_Setup.exe'
    })

    // 다운로드 완료 후 실행
    const setupPath = path.join(targetDir, 'PathOfExile_Setup.exe')
    console.log('Setup Path:', setupPath)
    spawn(setupPath)
  } catch (error) {
    if (error instanceof CancelError) {
      console.log('Download is canceled')
    } else {
      console.error('Download error:', error)
    }

    throw error
  }
}


