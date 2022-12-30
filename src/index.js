import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from "./App2";
import NotificationList from "./mounts/NotificationList";

const root = ReactDOM.createRoot(document.getElementById('potato'));
root.render(
    <React.StrictMode>
        {/*  jsx 문법에서 화면을 렌더링하기 위한 태그의 이름은 반드시 첫 글자가 대문자여야 함
            대문자를 사용하는 이유는 일반적으로 html 태그를 모두 소문자로 사용하기 때문에 html 태그인지 jsx 태그로 생성된 태그인지 구분하기 위함 */}
        <App2 />
        <NotificationList />
        <br/><hr/><br/>
        <App />
    </React.StrictMode>
);

