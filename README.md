# poe2-kakao-launcher

황카오 버전의 Path of Exile 2 스팀덱 실행을 위한 Electron 앱

일부러 윈도우 빌드로 만들어서 테스트 방법이 개 빡세니 PR은 언제나 환영합니다만, 현생이 바빠서 다 못볼수 있음요

## 설치방법

1. 스팀덱을 데스크탑 모드로 전환하세요.
2. Firefox, 크롬등의 웹브라우저로 **"Releases"** 페이지에서 최신 버전의 설치파일을 받으세요.
3. 데스크탑 모드의 Steam을 실행하고, 다운받은 설치파일을 **"Steam 외부게임 추가"** 기능으로 추가하세요.
4. 추가한 게임의 호환성 모드를 **Proton 9.0 이상 (혹은 GE-Proton 9.x)**로 변경하세요.
5. 추가한 게임을 실행하여 우선 설치를 완료하고 POE2 홈페이지가 뜨면 우선 창을 닫으세요.
6. 추가한 게임의 속성 중 다음 부분을 변경하세요.

    - 대상: `{스팀에 추가한 게임의 compability 경로}/pfx/drive_c/POE2Lanucher/poe2-kakao-launcher.exe`
    - 시작 모드: `{스팀에 추가한 게임의 compability 경로}/pfx/drive_c/POE2Lanucher/`

7. 스팀덱을 게임 모드로 전환하세요.
8. 방금 추가한 POE2를 실행하세요.
9. 동일하게 POE2 홈페이지가 표시되면 로그인을 실행하고 웹페이지에서 게임을 실행하세요.
10. 최초 실행의 경우 설치 프로그램이 실행되므로, 설치 이후 다시 게임을 실행하세요.

## 참고 사이트

- https://gall.dcinside.com/mgallery/board/view/?id=steamdeck&no=130959
- https://gist.github.com/tpdns90321/503f83247d8f1cec8fe70d69730b9f2f
