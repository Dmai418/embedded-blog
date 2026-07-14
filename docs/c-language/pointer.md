---
sidebar_position: 2
---

# 指针深入

## 指针与数组

```c
int arr[] = {1, 2, 3, 4, 5};
int *p = arr;       // p 指向 arr[0]

// 以下等价
arr[2] = 10;
*(p + 2) = 10;
*(arr + 2) = 10;
```

## 函数指针（回调函数）

```c
// 定义函数指针类型
typedef void (*LED_Control_t)(uint8_t state);

// 函数指针作为参数
void SetLED(LED_Control_t control, uint8_t state) {
    control(state);
}
```

## 指针在STM32中的应用

```c
// 直接操作寄存器地址
#define GPIOA_ODR  (*(volatile uint32_t *)0x40020014)
GPIOA_ODR |= (1 << 5);
```
