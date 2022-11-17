<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#환경셋팅">환경셋팅</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# [프리온보딩] 와이오엘오 백엔드 API 개발 프로젝트

## About The Project

### 프로젝트 개요

#### 서비스 개요

    - Croket 서비스를 벤치마킹해 커머스 사이트의 백엔드 API를 구현하는 프로젝트

- 개발 조건
  - database 는 NoSQL 사용
  - 규격에 맞게 개발
  - 
  - 현재 날씨는 외부 API 사용
</br>

- 책임

| 김성식                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| 게시물 리스트 가져오기</br>특정 게시물 정보 가져오기</br>게시물 생성하기</br>특정 게시물 수정하기<br>특정 게시물 |

</br>

- 개발 우선순위
  1. 완성: 일정 준수 / API 정상 작동 / 코딩 컨벤션 / 코드패키지 구조
     1. 2022.11.10.목요일 23:59 까지 API 완성
     2. API 정상 작동 테스트: 금요일 17:00-24:00 까지
     3. 금요일 내로 README 작성
  2. 추가 구현: 자세한 내용은 아래에 있음
     1. 목요일 이후에 구현
- 추가 구현 목표
  - Unit test

</br>

### SCHEMA

markets
<img width="880" alt="markets" src="https://user-images.githubusercontent.com/104759273/202369095-002b3c83-18c8-4c00-8ab5-cb3863fdf02a.png">

products
<img width="880" alt="products" src="https://user-images.githubusercontent.com/104759273/202369344-49f0ac41-cc9e-4921-9bec-04946a3fcf4a.png">

users
<img width="880" alt="users" src="https://user-images.githubusercontent.com/104759273/202369406-e8a1328b-5dae-437d-a677-16c6a6c32ac7.png">


</br>

### Built With

- JavaScript
- TypeScript
- MongoDB
- mongoose
- Jest

</br>

<!-- GETTING STARTED -->

## Getting Started

```
├── app.ts
├── controllers
│   ├── market.controller.ts
│   ├── product.controller.ts
│   └── user.controller.ts
├── custometypes
│   └── express.d.ts
├── dto
│   ├── product.dto.ts
│   └── user.dto.ts
├── middlewares
│   ├── authorization.middleware.ts
│   ├── errorConstructor.middleware.ts
│   └── errorHandler.middlewares.ts
├── routes
│   ├── index.routes.ts
│   ├── market.routes.ts
│   ├── product.routes.ts
│   └── user.routes.ts
├── schemas
│   ├── index.schema.ts
│   ├── market.schema.ts
│   ├── product.schema.ts
│   └── user.schema.ts
└── services
    ├── market.service.ts
    ├── product.service.ts
    └── user.service.ts
```

</br>

### 환경셋팅

- 프로젝트 셋업(Git repository & Server 초기세팅)
  - server 셋팅
    - MongoDB 및 Mongoose 를 사용함
  - Git repo
    - 짧은 프로젝트 기간을 고려해 git flow 는 단순화했음: main-feature branch
    - git 컨벤션: [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)

</br>

<!-- USAGE EXAMPLES -->

## Usage

[API 명세]

| METHOD | URL | 사용예시 | request | response |
| ------ | --- | -------- | ------- | -------- |
| GET | /api/boards/all | /api/boards/all | none | [{</br>id: number,</br>title: string,</br>content: string,</br>password: string,</br>weather: string,</br>createdAt: Date,</br>updatedAt: Date,</br>deletedAt: Date</br>}] |
| GET | /api/boards/all/:postId | /api/boards/all/1 | none | [{</br>id: number,</br>title: string,</br>content: string,</br>password: string,</br>weather: string,</br>createdAt: Date,</br>updatedAt: Date,</br>deletedAt: Date</br>}] |
| GET | /api/boards/detail/:postId | /api/boards/detail/1 | none | {</br>id: number,</br>title: string,</br>content: string,</br>password: string,</br>weather: string,</br>createdAt: Date,</br>updatedAt: Date,</br>deletedAt: Date</br>} | 
| POST | /api/boards/:userId | /api/boards/1 | {</br>userId: number,</br>title: string,</br>content: string,</br>password: string</br>} | 200 |
| PATCH | api/boards/:postId | /api/boards/1 |  {</br>userId: number,</br>title: string,</br>content: string,</br>password: string</br>} | 204 |
| DELETE | /api/boards/postId | /api/boards/1$password=? | none | 204 |



</br>

<!-- ROADMAP -->

## Roadmap

#### 구현 목표

- [x] 게시글 CRUD 기능 구현
- [x] 현재 날씨 가져오기 기능 구현
  - [x] unit test
