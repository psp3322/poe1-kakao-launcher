# poe2-kakao-launcher

황카오 버전의 Path of Exile 2 스팀덱 실행을 위한 Electron 앱

일부러 윈도우 빌드로 만들어서 테스트 방법이 개 빡세니 PR은 언제나 환영합니다만, 현생이 바빠서 다 못볼수 있음요

## 설치방법

1. 스팀덱을 데스크탑 모드로 전환하세요.
2. Firefox, 크롬등의 웹브라우저로 **["Releases"](https://github.com/drsasimi/poe2-kakao-launcher/releases)** 페이지에서 최신 버전의 설치파일을 받으세요.
3. 데스크탑 모드의 Steam을 실행하고, 다운받은 설치파일을 **"Steam 외부게임 추가"** 기능으로 추가하세요.
4. 추가한 게임의 호환성 모드를 **Proton 9.0 이상 (혹은 GE-Proton 9.x)**로 변경하세요.
5. 추가한 게임을 실행하여 우선 설치를 완료하고 POE2 홈페이지가 뜨면 우선 창을 닫으세요.
6. 추가한 게임의 속성 중 다음 부분을 변경하세요.

    - 대상: `/home/deck/.local/share/Steam/steamapps/compatdata/(랜덤숫자)/pfx/drive_c/POE2Launcher/poe2-kakao-launcher.exe`
    - 시작 모드: `/home/deck/.local/share/Steam/steamapps/compatdata/(랜덤숫자)/pfx/drive_c/POE2Launcher/`
    - 랜덤숫자는 덱마다 다르니 최근 기준으로 정렬해서 찾으면 편합니다.

7. 스팀덱을 게임 모드로 전환하세요.
8. 방금 추가한 POE2를 실행하세요.
9. 동일하게 POE2 홈페이지가 표시되면 로그인을 실행하고 웹페이지에서 게임을 실행하세요.
10. 실행 시, "설치 프로그램"이 표시되면 경로 건드리지 않고 그대로 설치 후, 다시 게임을 실행해 주세요.
11. 실행 시, "어떤 클라이언트로 실행할까요?" 가 표시되면 첫번째 **"PathOfExile_x64_KG.exe"** 로 실행해주세요.

## 유의사항

- 지정 PC가 걸려있으면 런쳐 실행이 안됩니다. 우회수단 발견 전까진 지정 PC 자체를 꺼주세요.
- 다음게임 로그인은 되어있는데 게임 시작 버튼이 표시가 안되는 경우가 있습니다. 이럴땐 POE 로고를 터치하여 새로고침 하다보면 됩니다.
- 실행시 "어떤 클라이언트로 실행할까요?" 질문에서 글로벌 버전은 서울 게이트웨이 하다가 **"버전정보가 맞지 않습니다"** 같은 특수상황에서만 사용하세요. 일반적으로는 글로벌 버전을 쓰실 필요가 없습니다.

## 참고 사이트

- https://gall.dcinside.com/mgallery/board/view/?id=steamdeck&no=130959
- https://gist.github.com/tpdns90321/503f83247d8f1cec8fe70d69730b9f2f
- https://gall.dcinside.com/mgallery/board/view/?id=steamdeck&no=131143
