# ClientEvents.paintScreen

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: [PaintScreenEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/client/painter/screen/PaintScreenEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| mouseX | int | ✘ |
| mouseY | int | ✘ |
| width | int | ✘ |
| height | int | ✘ |
| inventory | boolean | ✘ |
| mc | Minecraft | ✘ |
| font | Font | ✘ |
| graphics | GuiGraphics | ✘ |
| matrices | PoseStack | ✘ |
| tesselator | Tesselator | ✘ |
| buffer | BufferBuilder | ✘ |
| delta | float | ✘ |
| screen | Screen | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| scale | float |  | void | ✘ |
| scale | float, float |  | void | ✘ |
| text | Component, int, int, int, boolean |  | void | ✘ |
| translate | double, double |  | void | ✘ |
| getVariables |  |  | VariableSet | ✘ |
| rawText | FormattedCharSequence, int, int, int, boolean |  | void | ✘ |
| rectangle | float, float, float, float, float, int |  | void | ✘ |
| rectangle | float, float, float, float, float, int, float, float, float, float |  | void | ✘ |
| rotateRad | float |  | void | ✘ |
| alignX | float, float, int |  | float | ✘ |
| alignY | float, float, int |  | float | ✘ |
| rotateDeg | float |  | void | ✘ |
| multiply | Quaternionf |  | void | ✘ |
| scale | float, float, float |  | void | ✘ |
| end |  |  | void | ✘ |
| begin | VertexFormat$Mode, VertexFormat |  | void | ✘ |
| push |  |  | void | ✘ |
| pop |  |  | void | ✘ |
| vertex | Matrix4f, float, float, float, int |  | void | ✘ |
| vertex | Matrix4f, float, float, float, int, float, float |  | void | ✘ |
| setShaderTexture | ResourceLocation |  | void | ✘ |
| setShaderColor | float, float, float, float |  | void | ✘ |
| setPositionColorTextureShader |  |  | void | ✘ |
| setPositionColorShader |  |  | void | ✘ |
| translate | double, double, double |  | void | ✘ |
| bindTextureForSetup | ResourceLocation |  | void | ✘ |
| beginQuads | VertexFormat |  | void | ✘ |
| beginQuads | boolean |  | void | ✘ |
| resetShaderColor |  |  | void | ✘ |
| multiplyWithMatrix | Matrix4f |  | void | ✘ |
| getMatrix |  |  | Matrix4f | ✘ |
| setShaderInstance | Supplier<ShaderInstance> |  | void | ✘ |
| getPlayer |  |  | Player | ✘ |
| getEntity |  |  | Entity | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| removeGameStage | String |  | void | ✘ |
| addGameStage | String |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


### Documented members:

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
```

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
ClientEvents.paintScreen((event) => {
	// This space (un)intentionally left blank
});
```

