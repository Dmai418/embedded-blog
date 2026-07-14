---
sidebar_position: 3
---

# 结构体与联合体

## 结构体（组织数据）

```c
typedef struct {
    uint16_t year;
    uint8_t  month;
    uint8_t  day;
    uint8_t  hour;
    uint8_t  minute;
    uint8_t  second;
} RTC_Time_t;
```

## 联合体（数据解析）

```c
typedef union {
    uint8_t  bytes[4];
    uint32_t word;
} Data32_t;

// 用于串口数据解析
Data32_t data;
data.bytes[0] = 0xAA;
data.bytes[1] = 0xBB;
// data.word == 0xBBBBAAAA
```
