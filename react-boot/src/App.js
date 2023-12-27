import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      {/*
        container: 본문을 담을 컨테이너를 생성
        mt-4: mt 는 margin top을 나타냄, -4는 상단 마진을 4단위로 설정하겠다.

        row: 컬럼을 나열하는데 사용
        
        col-md-6: col은 column의 약자
                  md는 medium 중간 화면 크기
                  6는 6개의 column을 차지
                  1줄의 컬럼은 12개 구성
      */}
      <main className='container mt-4'>
        <div className='row'>
          <div className='col-md-4'>
            <h2>
              하나
            </h2>
            <p>이것은 하나입니다</p>
          </div>
          <div className='col-md-4'>
            <h2>
              둘
            </h2>
            <p>이것은 둘입니다</p>
          </div>
          <div className='col-md-4'>
            <h2>
              셋
            </h2>
            <p>이것은 셋입니다</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <h2 className='text-center'>
              하나
            </h2>
            <p>이것은 하나입니다</p>
          </div>
          <div className='col-md-4'>
            <h2>
              둘
            </h2>
            <p>이것은 둘입니다</p>
          </div>
          <div className='col-md-4'>
            <h2>
              셋
            </h2>
            <p>이것은 셋입니다</p>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
