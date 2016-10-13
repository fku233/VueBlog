以下使用“单身狗”说明单例模式

## 1. 懒汉式

```
public class SingleDog {  
     private static SingleDog instance;  
     private SingleDog (){}   
     public static SingleDog getInstance() {  
       if (instance == null) {  
         instance = new SingleDog();  
       }  
     return instance;  
     }  
 }
```

## 2. 懒汉式（synchronized）

```
public class SingleDog {
    private static SingleDog instance;
    private SingleDog() {
    }
    public static synchronized SingleDog getInstance() {
        if (instance == null) {
            instance = new SingleDog();
        }
        return instance;
    }
}
```

## 3. 饿汉式（静态成员）

```
public class SingleDog {  
  private static SingleDog instance = new SingleDog();  
  private SingleDog (){}
  public static SingleDog getInstance() {  
     return instance;  
  }  
}
```

## 4. 饿汉式（静态代码块）

```
public class SingleDog{
    private static SingleDog instance = null;
    static{
      instance = new SingleDog();
    }
    private SingleDog(){}
    public static SingleDog getInstance(){
      return instance;
    }
}
```

## 5. 饿汉式（静态内部类）

```
public class SingleDog {
    private static class SingleDogHolder {
        private static final SingleDog INSTANCE = new SingleDog();
    }

    private SingleDog() {
    }

    public static final SingleDog getInstance() {
        return SingleDogHolder.INSTANCE;
    }
}
```

## 6. 枚举

```
public enum SingleDog{
    INSTANCE;
    public void metting(Girl she){
        // TODO
    }
}
```

## 7. 懒汉式（volatile ）

```
public class SingleDog {
    private volatile static SingleDog SingleDog = null;
    private SingleDog(){}
    public static SingleDog getInstance(){
        if(SingleDog==null){
            synchronized (SingleDog.class){
                if(SingleDog==null){
                    SingleDog = new SingleDog();
                }
            }

        }
        return SingleDog;
    }
}
```

volatile 变量写后读，保障读取瞬时都是正确非空的判断。