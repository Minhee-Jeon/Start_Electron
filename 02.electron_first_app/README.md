# 02. 개발 흐름 체험해보기

```
//Windows cmd
D:\Start_Electron\02.electron_first_app>.\node_modules\.bin\electron .
```



<img src="https://user-images.githubusercontent.com/58028527/97241109-70374080-1833-11eb-97f8-1f54b4b56ae0.PNG" style="zoom:75%;" />

---

### main.js 

```javascript
const { app, BrowserWindow } = require("electron");
```

`electron` 모듈에서 `app` 인스턴스와 `BrowserWindow` 클래스를 추출해요.

- `app` 인스턴스

   애플리케이션의 생명주기와 관련돼 있어요. Electron 애플리케이션 전체에서 인스턴스가 하나뿐인 싱글톤 객체입니다.

  | 이벤트 이름       | 설명                                                         |
  | ----------------- | ------------------------------------------------------------ |
  | ready             | Electron 애플리케이션이 실행되고 초기화가 완료되었을 때      |
  | window-all-closed | 모든 윈도우가 닫혔을 때                                      |
  | activate          | (macOS: 어플 도크에서 아이콘 클릭 시)<br />Electron 애플리케이션이 비활성화 상태에서 활성화됐을 때 |

  [Electron 생명주기 API 레퍼런스](https://www.electronjs.org/docs/api/app)

- `BrowserWindow` 클래스와 인스턴스

  Renderer 프로세스를 만들어 웹 페이지를 출력하게 해요. `BrowserWindow` 인스턴스 하나는 웹페이지 하나라고 보면 돼요.



```javascript
win.loadURL('file://' + __dirname + '/index.html');
```

`BrowserWindow` 인스턴스의 `loadURL()`로 HTML 파일을 읽어들여요.