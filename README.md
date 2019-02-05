## study.bixbyCapsule

### 기본개념

#### concepts

빅스비가 알고있는 것. 빅스비에게 인지시킬 모든 것?  
개념 자체를 모델링하는 단어

예를들어  

 `NumDice.model.bxb`은 primitive 컨셉 중 하나인 integer라고 명시가 되어있다.  
 primitive는 integer, boolean, text등이 있다.

```
integer (NumDice) {
  description (The number of dice to throw.)
}
```

`RollResult.model.bxb`은 structure 컨셉으로 다른 primitive 컨셉을 포함하는 구조를 만들 수 있다.
```
structure (RollResult) {
  description (The result object produced by the RollDice action.)
  property (sum) {
    type (Sum)
    min (Required)
    max (One)
  }
  property (roll) {
    description (The list of results for each dice roll.)
    type (Roll)
    min (Required)
    max (Many)
  }      
}

```

#### action

빅스비가 사용자를 대신해서 수행 할 작업을 정의한 것

#### endpoint



```
endpoints {
   authorization {
     none
   }
   action-endpoints {
     action-endpoint (RollDice) {
       accepted-inputs (numDice, numSides)
       local-endpoint ("RollDice.js")
     }
   }

```