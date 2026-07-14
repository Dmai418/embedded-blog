---
sidebar_position: 1
---

# FreeRTOS 入门

## 什么是 FreeRTOS？

FreeRTOS 是一个轻量级的实时操作系统，适用于微控制器。

## 核心概念

- **任务(Task)**: 独立执行单元
- **队列(Queue)**: 任务间通信
- **信号量(Semaphore)**: 同步机制
- **互斥量(Mutex)**: 资源保护

## 创建任务

```c
void StartDefaultTask(void *argument) {
    for(;;) {
        HAL_GPIO_TogglePin(LED_GPIO_Port, LED_Pin);
        osDelay(500);
    }
}

// 任务句柄
osThreadId_t defaultTask;
const osThreadAttr_t defaultTask_attributes = {
    .name = "defaultTask",
    .stack_size = 128 * 4,
    .priority = (osPriority_t) osPriorityNormal,
};

// 创建任务
defaultTask = osThreadNew(StartDefaultTask, NULL, &defaultTask_attributes);
```
