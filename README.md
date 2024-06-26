# Nand2Tetris Study

- [From Nand to Tetris](https://www.nand2tetris.org/)
- [밑바닥부터 만드는 컴퓨팅 시스템](https://blog.insightbook.co.kr/2019/03/29/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%BB%B4%ED%93%A8%ED%8C%85-%EC%8B%9C%EC%8A%A4%ED%85%9C/)

## 개발 환경

- 자바가 필요하다
- [Nand2Tetris > Software](https://www.nand2tetris.org/software)에서 **`Download the Nand2tetris Software Suite`** 를 다운로드한다.
  - `tools`: 시뮬레이터 등등
  - `projects`: 각 장을 실습하는데 필요한 파일들

> **NOTE** 참고로 이 저장소에서는 `projects` 파일 밑에 있는 파일들만 사용하고 툴은 따로 포함하지 않는다.

## 1장: 불 논리

### 목표

이 장에서 소개된 모든 논리 게이트를 구현해 보자.

### 필요한 소프트웨어

- HardwareSimulator.sh

### 테스트 방법

1. `HardwareSimulator.sh` 실행 (자바가 필요함)
2. `File > Load Chip` 를 선택하고, 로드할 칩의 `.hdl` 파일을 연다.
   - 참고로 시뮬레이터에서는 `.hdl` 파일을 편집할 수 없으므로 코드를 작성할 때는 별도의 텍스트 에디터를 사용해야 한다.
   - Visual Studio Code 사용 시, Extension으로 Nand2Tetris(hdl syntax highlighter)를 설치할 수 있다.
3. `File > Load Script` 를 선택하고, 테스트 스크립트 `.tst` 파일을 연다.
4. `Run > Run` 실행

   - 이 때, `.hdl` 파일과 `.cmp` 파일이 같은 폴더에 있어야 한다.
   - `Comparision ended successfully`가 표시되면 칩 테스트에 성공한 것
   - 참고: 맥 터미널에서 `.out` 파일과 `.cmp` 파일을 직접 비교하고 싶은 경우, diff 에서 다음 옵션을 사용하라.

     ```
     diff --strip-trailing-cr 01/Not.out 01/Not.cmp
     ```

### 기본 논리 게이트

- [x] Not
- [x] And
- [x] Or
- [x] Xor
- [x] Mux
- [x] DMux

### 기본 게이트의 멀티비트 버전

- [x] Not16
- [x] And16
- [x] Or16
- [x] Mux16

### 기본 게이트의 다입력 버전

- [x] Or8Way
- [x] Mux4Way16
- [x] Mux8Way16
- [x] DMux4Way
- [x] DMux8Way

## 2장 불 연산

### 목표

이 장에서 소개된 모든 칩을 구현해 보자. 앞 장에서 설명했거나 만들어 보았던 칩들만 사용하자.

### 칩 목록

- [x] 반가산기: HalfAdder
- [x] 전가산기: FullAdder
- [x] 가산기: Add16
- [x] 증분기: Inc16
- [x] 산술 논리 연산 장치: ALU

## 3장 순차 논리

### 목표

이 장에서 설명한 칩들을 모두 만들어보자. 구성 블록으로 사용할 수 있는 것은 기초 DFF 게이트와, 그 칩에서 파생된 칩들, 그리고 앞 장에서 나온 칩들 뿐이다.

### 칩 목록

- [ ] 1비트 레지스터: Bit
- [ ] 레지스터: Register
- [ ] 8-레지스터 메모리: RAM8
- [ ] n-레지스터 메모리: RAM64, RAM512, RAM4K, RAM16K
- [ ] 계수기: PC

