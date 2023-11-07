# math-logical

`Math.logical` has the following methods:

| Method | | | | |
|--|--|--|--|--|
| p | 0 | 0 | 1 | 1 |
| q | 0 | 1 | 0 | 1 |
|`and(p,q)`| 0 | 0 | 0 | 1 |
|`or(p,q)`| 0 | 1 | 1 | 1 |
|`xor(p,q)`| 0 | 1 | 1 | 0 |
|`nand(p,q)`| 1 | 1 | 1 | 0 |
|`nor(p,q)`| 1 | 0 | 0 | 0 |
|`xnor(p,q)`| 1 | 0 | 0 | 1 |
|`not(p)`| 1 | 1 | 0 | 0 |
|`not(q)`| 1 | 0 | 1 | 0 |
|`implies(p,q)`| 1 | 1 | 0 | 1 |
|`implies(q,p)`| 1 | 0 | 1 | 1 |

> 0 and 1 stand for `false` and `true`, respectively

## Use Example

```
Math.logical.and(true, false)
// false

Math.logical.or(true, false)
// true
```
