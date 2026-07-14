---
sidebar_position: 1
---

# STM32 入门

## 开发环境搭建

- **IDE**: Keil MDK v5
- **芯片**: STM32F103C8T6
- **调试器**: ST-Link V2
- **串口**: CH340 + SSCOM

## 新建工程步骤

1. 打开 Keil → Project → New Project
2. 选择芯片型号（如 STM32F103C8）
3. 添加启动文件、系统文件
4. 编写 main.c

## GPIO 输出 - 点灯

```c
#include "stm32f1xx_hal.h"

int main() {
    HAL_Init();
    __HAL_RCC_GPIOC_CLK_ENABLE();
    
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_13;
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOC, &GPIO_InitStruct);
    
    while (1) {
        HAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);
        HAL_Delay(500);
    }
}
```
