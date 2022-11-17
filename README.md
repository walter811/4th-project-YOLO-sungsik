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
  - RESTful API 구현
  - TypeORM 사용 금지
  - 총 3개의 Collection만 사용할 것
</br>

- 책임

| 김성식                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| 유저 CRUD</br>상품 CRUD |

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

markets</br>
<img width="600" alt="markets" src="https://user-images.githubusercontent.com/104759273/202369095-002b3c83-18c8-4c00-8ab5-cb3863fdf02a.png">
</br>

products</br>
<img width="600" alt="products" src="https://user-images.githubusercontent.com/104759273/202369344-49f0ac41-cc9e-4921-9bec-04946a3fcf4a.png">
</br>
users</br>
<img width="600" alt="users" src="https://user-images.githubusercontent.com/104759273/202369406-e8a1328b-5dae-437d-a677-16c6a6c32ac7.png">
</br>

</br>

### Built With

- JavaScript
- TypeScript
- MongoDB
- mongoose
- bcrypt
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
| POST | /api/user/signup | /api/user/signup | {</br>name: string,</br>email: string,</br>password: string,</br>phoneNumber: string,</br>nationality: string</br>} | {message: 'User created'} |
| POST | /api/user/signin | /api/user/signin | {</br>email: string,</br>password: string</br>} | {accessToken: 'token'} |
| PATCH | /api/user/update | /api/user/update | {</br>name: string,</br>password: string,</br>phoneNumber: string,</br>nationality: string</br>} | none |
| PATCH | /api/user/seller | /api/user/seller | {</br>name: string,</br>account: string</br>} | none |
| DELETE | /api/user | /api/user | none | none |
| GET | /api/market | /api/market?sortBy=&skip= | none | {</br>name: string,</br>purchaseNation: string,</br>description: string,</br>shippingInfo: string,</br>seller: ObjectId,</br>Option: [{name: string,{</br>price: number,{</br>quantity: number}],</br>image: string,</br>category: ObjectId,</br>orderDeadline: Date,</br>deletedAt: Date</br>} |
| GET | /api/market/category | /api/market/category</br>?mainCategory=&subCategory=&purchaseNation=&sortBy=&skip= | none | 〃 |
| GET | /api/market/search | /api/market/search?search=&sortBy=&skip= | none | 〃 |
| GET | /api/market/:productId | /api/market/1 | none | 〃 |
| POST | /api/product | /api/product | {</br>name: string,{</br>purchaseNation: string,{</br>description: string,{</br>shippingInfo: string{</br>option: {[name: string,{</br>price: number,{</br>quantity: number{</br>}],{</br>image: string,{</br>category: string,{</br>orderDeadline: Date{</br>} | {message: 'Product registered'} |
| PATCH | /api/product | /api/product?productId= |  {</br>name: string,{</br>purchaseNation: string,{</br>description: string,{</br>shippingInfo: string{</br>option: {[name: string,{</br>price: number,{</br>quantity: number{</br>}],{</br>image: string,{</br>category: string,{</br>orderDeadline: Date{</br>} | none |
| DELETE | /api/product | /api/product?productId= | none | none |




</br>

<!-- ROADMAP -->

## Roadmap

#### 구현 목표

- [x] 유저 CRUD 기능 구현
- [x] 상품 CRUD 기능 구현
  - [] unit test
