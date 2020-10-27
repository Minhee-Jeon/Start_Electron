Markdown 작성을 위한 에디터 (화면 왼쪽)

Markdown 렌더링 결과 HTML 실시간 미리보기 (화면 오른쪽) 

PDF 출력 기능



React를 사용해 SPA로 개발



- SPA 노하우를 사용한 실시간 렌더링
- Node.js API를 활용한 파일 읽기&쓰기
- Main 프로세스와 Renderer 프로세스
- IPC 통신



###  필요한 모듈 설치하기

'markdown_editor' 폴더를 만들고 cmd로 폴더로 이동 

```javascript
npm init
npm install electron@10.1.5 --save-dev
npm install connors/photon react@16.13.1 react-dom@16.13.1 --save
```

[webpack](https://webpack.js.org) (모듈 번들러)

여러 파일로 구성된 어플을 하나의 JavaScript 파일로 뭉쳐주는 모듈 번들러예요. 웹팩으로 CSS 파일과 이미지 파일을 번들하도록 할게요.

``` javascript
npm install webpack@2.2.0 --save-dev
```

Babel로 ES2015와 React JSX 파일 변환하기

``` javascript
npm install babel-core@6.26.0 babel-loader@8.1.0 babel-preset-react@6.16.0 --save-dev
```

```javascript
npm install babel-preset-es2015-commonjs-nostrict
```

style-loader: CSS 파일 번들

```javascript
npm install css-loader@5.0.0 style-loader@2.0.0 --save-dev
```



### 폴더 구성

- markdown_editor
  - src
    - main
    - renderer
  - package.json
  - node_modules