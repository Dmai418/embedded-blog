---
sidebar_position: 2
---

# 项目：LED 闪烁

## 硬件连接

| LED | GPIO |
|-----|------|
| LED1 | PC13 |
| LED2 | PA1  |
| LED3 | PA2  |

## 代码实现

```c
#include "stm32f1xx_hal.h"

void LED_Init(void) {
    __HAL_RCC_GPIOC_CLK_ENABLE();
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    
    GPIO_InitStruct.Pin = GPIO_PIN_13;
    HAL_GPIO_Init(GPIOC, &GPIO_InitStruct);
    
    GPIO_InitStruct.Pin = GPIO_PIN_1 | GPIO_PIN_2;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
}

int main() {
    HAL_Init();
    LED_Init();
    
    while (1) {
        HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_RESET);  // 开
        HAL_Delay(500);
        HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_SET);    // 关
        HAL_Delay(500);
    }
}
```

## 效果

LED 以 1Hz 频率闪烁（亮 0.5s，灭 0.5s）。
