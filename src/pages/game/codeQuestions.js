// src/pages/game/codeQuestions.js
export const codeQuestions = [
  // 1) Even / Odd
  {
    id: "even-odd",
    title: "เลขคู่หรือคี่",
    description: "รับจำนวนเต็ม n แล้วพิมพ์ Even ถ้าเป็นเลขคู่ มิฉะนั้นพิมพ์ Odd",
    suggestedTimeSec: 45,
    tests: [{ in: "8\n", out: "Even\n" }, { in: "7\n", out: "Odd\n" }, { in: "0\n", out: "Even\n" }],
    starter: {
      python: `# อ่าน n แล้วพิมพ์ "Even" ถ้า n เป็นเลขคู่ ไม่งั้นพิมพ์ "Odd"
n = int(input())
# TODO: พิมพ์คำตอบ
# print("Even" if n % 2 == 0 else "Odd")
`,
      c: `#include <stdio.h>
int main(){ 
    long n; 
    if (scanf("%ld", &n)!=1) return 0;
    // TODO: พิมพ์ Even หรือ Odd
    // printf("%s\\n", (n%2==0) ? "Even" : "Odd");
    return 0; 
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    long n=s.nextLong();
    // TODO: พิมพ์ Even หรือ Odd
    // System.out.println(n%2==0?"Even":"Odd");
  }
}
`,
    },
    solution: {
      python: `n=int(input());print("Even" if n%2==0 else "Odd")\n`,
      c: `#include <stdio.h>\nint main(){long n; if(scanf("%ld",&n)!=1) return 0; printf("%s\\n", (n%2==0)?\"Even\":\"Odd\"); return 0;}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in); long n=s.nextLong(); System.out.println(n%2==0?\"Even\":\"Odd\");}}\n`,
    },
  },

  // 2) Factorial
  {
    id: "factorial",
    title: "แฟกทอเรียล",
    description: "รับ n (1–12) แล้วพิมพ์ค่า n!",
    suggestedTimeSec: 60,
    tests: [{ in: "1\n", out: "1\n" }, { in: "5\n", out: "120\n" }, { in: "8\n", out: "40320\n" }],
    starter: {
      python: `# พิมพ์ค่า n!
n = int(input())
f = 1
# TODO: คูณสะสมตั้งแต่ 1..n
# for i in range(1, n+1): f *= i
# print(f)
`,
      c: `#include <stdio.h>
int main(){
    int n; if (scanf("%d",&n)!=1) return 0;
    long long f=1;
    // TODO: คูณสะสม 1..n แล้วพิมพ์ผล
    // for(int i=1;i<=n;i++) f*=i;
    // printf("%lld\\n", f);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    int n=s.nextInt();
    long f=1;
    // TODO: คูณสะสม 1..n แล้วพิมพ์ผล
    // for(int i=1;i<=n;i++) f*=i;
    // System.out.println(f);
  }
}
`,
    },
    solution: {
      python: `n=int(input());f=1\nfor i in range(1,n+1):f*=i\nprint(f)\n`,
      c: `#include <stdio.h>\nint main(){int n; if(scanf(\"%d\",&n)!=1) return 0; long long f=1; for(int i=1;i<=n;i++) f*=i; printf(\"%lld\\n\",f); return 0;}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);int n=s.nextInt(); long f=1; for(int i=1;i<=n;i++) f*=i; System.out.println(f);}}\n`,
    },
  },

  // 3) Fibonacci (0-based)
  {
    id: "fibo-n",
    title: "ลำดับฟีโบนักชีตัวที่ n (0-based)",
    description: "รับ n (0-based) แล้วพิมพ์ค่า Fibonacci(n) โดย F0=0,F1=1",
    suggestedTimeSec: 75,
    tests: [{ in: "0\n", out: "0\n" }, { in: "1\n", out: "1\n" }, { in: "10\n", out: "55\n" }],
    starter: {
      python: `# พิมพ์ Fibonacci(n) แบบวนลูป
n = int(input())
a, b = 0, 1
# TODO: วนลูป n ครั้งแล้วพิมพ์ a
# for _ in range(n):
#     a, b = b, a + b
# print(a)
`,
      c: `#include <stdio.h>
int main(){ 
    int n; scanf("%d",&n);
    long long a=0,b=1;
    // TODO: วนลูป n ครั้ง แล้วพิมพ์ค่า a
    // for(int i=0;i<n;i++){ long long t=a; a=b; b=t+b; }
    // printf("%lld\\n", a);
    return 0; 
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    int n=s.nextInt();
    long a=0,b=1;
    // TODO: วนลูป n ครั้ง แล้วพิมพ์ค่า a
    // for(int i=0;i<n;i++){ long t=a; a=b; b=t+b; }
    // System.out.println(a);
  }
}
`,
    },
    solution: {
      python: `n=int(input())\na,b=0,1\nfor _ in range(n): a,b=b,a+b\nprint(a)\n`,
      c: `#include <stdio.h>\nint main(){int n;scanf(\"%d\",&n); long long a=0,b=1; for(int i=0;i<n;i++){ long long t=a; a=b; b=t+b;} printf(\"%lld\\n\",a);}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);int n=s.nextInt(); long a=0,b=1; for(int i=0;i<n;i++){long t=a;a=b;b=t+b;} System.out.println(a);}}\n`,
    },
  },

  // 4) Sum 1..n
  {
    id: "sum-1-n",
    title: "ผลรวม 1 ถึง n",
    description: "รับ n แล้วพิมพ์ผลรวม 1+2+...+n",
    suggestedTimeSec: 40,
    tests: [{ in: "1\n", out: "1\n" }, { in: "5\n", out: "15\n" }, { in: "10\n", out: "55\n" }],
    starter: {
      python: `n = int(input())
# TODO: ใช้สูตร n*(n+1)//2 หรือวนลูปก็ได้
# print(n*(n+1)//2)
`,
      c: `#include <stdio.h>
int main(){
    long long n; scanf("%lld",&n);
    // TODO: พิมพ์ผลรวม 1..n
    // printf("%lld\\n", n*(n+1)/2);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    long n=s.nextLong();
    // TODO: พิมพ์ผลรวม 1..n
    // System.out.println(n*(n+1)/2);
  }
}
`,
    },
    solution: {
      python: `n=int(input());print(n*(n+1)//2)\n`,
      c: `#include <stdio.h>\nint main(){long long n;scanf(\"%lld\",&n); printf(\"%lld\\n\", n*(n+1)/2);}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);long n=s.nextLong(); System.out.println(n*(n+1)/2);}}\n`,
    },
  },

  // 5) Max of N numbers
  {
    id: "max-n",
    title: "ค่าสูงสุดของชุดตัวเลข",
    description: "รับ n ตามด้วยตัวเลข n ตัว แล้วพิมพ์ค่ามากสุด",
    suggestedTimeSec: 60,
    tests: [{ in: "3\n5 9 2\n", out: "9\n" }, { in: "5\n-1 -5 -3 -8 -2\n", out: "-1\n" }],
    starter: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# TODO: หาค่าสูงสุดแล้วพิมพ์
# print(max(arr))
`,
      c: `#include <stdio.h>
int main(){
    int n; if (scanf("%d",&n)!=1) return 0;
    long long x, m;
    if (scanf("%lld",&m)!=1) return 0;
    // TODO: อ่านตัวที่เหลือแล้วหาค่าสูงสุด
    // for(int i=1;i<n;i++){ scanf("%lld",&x); if(x>m) m=x; }
    // printf("%lld\\n", m);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    int n=s.nextInt();
    long m=s.nextLong();
    // TODO: อ่านตัวที่เหลือแล้วหาค่าสูงสุด
    // for(int i=1;i<n;i++){ long x=s.nextLong(); if(x>m) m=x; }
    // System.out.println(m);
  }
}
`,
    },
    solution: {
      python: `n=int(input());arr=list(map(int,input().split()))\nprint(max(arr))\n`,
      c: `#include <stdio.h>\nint main(){int n; if(scanf(\"%d\",&n)!=1) return 0; long long x,m; scanf(\"%lld\",&m); for(int i=1;i<n;i++){scanf(\"%lld\",&x); if(x>m)m=x;} printf(\"%lld\\n\",m);}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);int n=s.nextInt(); long m=s.nextLong(); for(int i=1;i<n;i++){ long x=s.nextLong(); if(x>m)m=x;} System.out.println(m);}}\n`,
    },
  },

  // 6) Palindrome string
  {
    id: "palin",
    title: "สตริงพาลินโดรม",
    description: "รับสตริงตัวพิมพ์เล็ก (ไม่มีช่องว่าง) ถ้าเป็นพาลินโดรมพิมพ์ YES ไม่ใช่พิมพ์ NO",
    suggestedTimeSec: 45,
    tests: [{ in: "level\n", out: "YES\n" }, { in: "abc\n", out: "NO\n" }],
    starter: {
      python: `s = input().strip()
# TODO: พิมพ์ YES ถ้า s == s[::-1] ไม่งั้น NO
# print("YES" if s == s[::-1] else "NO")
`,
      c: `#include <stdio.h>
#include <string.h>
int main(){
    char s[1005]; scanf("%s", s);
    // TODO: ตรวจพาลินโดรมด้วยสองชี้หัวท้าย
    // int i=0,j=strlen(s)-1, ok=1;
    // while(i<j){ if(s[i++]!=s[j--]){ok=0;break;} }
    // puts(ok?"YES":"NO");
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner sc=new Scanner(System.in);
    String x=sc.next();
    // TODO: เช็คกับ reverse
    // String y=new StringBuilder(x).reverse().toString();
    // System.out.println(x.equals(y)?"YES":"NO");
  }
}
`,
    },
    solution: {
      python: `s=input().strip();print(\"YES\" if s==s[::-1] else \"NO\")\n`,
      c: `#include <stdio.h>\n#include <string.h>\nint main(){char s[1005]; scanf(\"%s\",s); int i=0,j=strlen(s)-1; int ok=1; while(i<j){ if(s[i++]!=s[j--]){ok=0;break;} } printf(\"%s\\n\", ok?\"YES\":\"NO\");}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);String x=s.next(); String y=new StringBuilder(x).reverse().toString(); System.out.println(x.equals(y)?\"YES\":\"NO\");}}\n`,
    },
  },

  // 7) Prime check
  {
    id: "prime-check",
    title: "เช็คจำนวนเฉพาะ",
    description: "รับจำนวนเต็มบวก n ถ้าเป็นจำนวนเฉพาะพิมพ์ PRIME ไม่ใช่พิมพ์ NOT",
    suggestedTimeSec: 60,
    tests: [{ in: "2\n", out: "PRIME\n" }, { in: "9\n", out: "NOT\n" }, { in: "1\n", out: "NOT\n" }],
    starter: {
      python: `n = int(input())
# TODO: เช็ค n < 2 -> NOT, จากนั้นลองหารตั้งแต่ 2..isqrt(n)
# import math
# p=True
# for i in range(2, int(math.isqrt(n))+1):
#     if n%i==0: p=False; break
# print("PRIME" if p and n>=2 else "NOT")
`,
      c: `#include <stdio.h>
#include <math.h>
int main(){
    long n; scanf("%ld",&n);
    // TODO: ถ้า n<2 -> NOT, ลองหาร 2..sqrt(n)
    // if(n<2){ puts("NOT"); return 0; }
    // for(long i=2;i*i<=n;i++) if(n%i==0){ puts("NOT"); return 0; }
    // puts("PRIME");
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  static boolean prime(long n){
    // TODO: เขียนเช็คจำนวนเฉพาะ
    // if(n<2) return false;
    // for(long i=2;i*i<=n;i++) if(n%i==0) return false;
    // return true;
    return false;
  }
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    long n=s.nextLong();
    System.out.println(prime(n) ? "PRIME" : "NOT");
  }
}
`,
    },
    solution: {
      python: `n=int(input());\nif n<2:print(\"NOT\")\nelse:\n  import math\n  p=True\n  for i in range(2,int(math.isqrt(n))+1):\n    if n%i==0:p=False;break\n  print(\"PRIME\" if p else \"NOT\")\n`,
      c: `#include <stdio.h>\n#include <math.h>\nint main(){long n;scanf(\"%ld\",&n); if(n<2){puts(\"NOT\");return 0;} long r=(long)sqrt(n); for(long i=2;i<=r;i++) if(n%i==0){puts(\"NOT\");return 0;} puts(\"PRIME\");}\n`,
      java: `import java.util.*;class Main{static boolean prime(long n){if(n<2)return false; for(long i=2;i*i<=n;i++) if(n%i==0) return false; return true;} public static void main(String[]a){Scanner s=new Scanner(System.in);long n=s.nextLong(); System.out.println(prime(n)?\"PRIME\":\"NOT\");}}\n`,
    },
  },

  // 8) GCD
  {
    id: "gcd",
    title: "หาค่า GCD",
    description: "รับจำนวนเต็มบวก a b แล้วพิมพ์ gcd(a,b)",
    suggestedTimeSec: 45,
    tests: [{ in: "12 18\n", out: "6\n" }, { in: "7 13\n", out: "1\n" }],
    starter: {
      python: `a, b = map(int, input().split())
# TODO: Euclid algorithm
# while b: a, b = b, a % b
# print(a)
`,
      c: `#include <stdio.h>
long long gcd(long long a,long long b){
    // TODO: Euclid algorithm
    // while(b){ long long t=a%b; a=b; b=t; }
    return a;
}
int main(){ long long a,b; scanf("%lld %lld",&a,&b); /* printf("%lld\\n", gcd(a,b)); */ return 0; }
`,
      java: `import java.util.*;
class Main{
  static long gcd(long a,long b){
    // TODO: Euclid algorithm
    // while(b!=0){ long t=a%b; a=b; b=t; }
    return a;
  }
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    long x=s.nextLong(), y=s.nextLong();
    // System.out.println(gcd(x,y));
  }
}
`,
    },
    solution: {
      python: `a,b=map(int,input().split())\nwhile b:a,b=b,a%b\nprint(a)\n`,
      c: `#include <stdio.h>\nlong long g(long long a,long long b){while(b){long long t=a%b;a=b;b=t;}return a;}int main(){long long a,b;scanf(\"%lld %lld\",&a,&b); printf(\"%lld\\n\",g(a,b));}\n`,
      java: `import java.util.*;class Main{static long g(long a,long b){while(b!=0){long t=a%b;a=b;b=t;}return a;} public static void main(String[]a){Scanner s=new Scanner(System.in);long x=s.nextLong(),y=s.nextLong(); System.out.println(g(x,y));}}\n`,
    },
  },

  // 9) Reverse string
  {
    id: "reverse",
    title: "กลับสตริง",
    description: "รับสตริง 1 บรรทัดแล้วพิมพ์แบบกลับด้าน",
    suggestedTimeSec: 30,
    tests: [{ in: "abcd\n", out: "dcba\n" }],
    starter: {
      python: `s = input().rstrip("\\n")
# TODO: พิมพ์กลับด้าน
# print(s[::-1])
`,
      c: `#include <stdio.h>
#include <string.h>
int main(){
    char s[1005]; scanf("%s", s);
    // TODO: พิมพ์กลับด้าน
    // for(int i=strlen(s)-1;i>=0;i--) putchar(s[i]);
    // putchar('\\n');
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner sc=new Scanner(System.in);
    String x=sc.next();
    // TODO: พิมพ์กลับด้าน
    // System.out.println(new StringBuilder(x).reverse().toString());
  }
}
`,
    },
    solution: {
      python: `print(input()[::-1])\n`,
      c: `#include <stdio.h>\n#include <string.h>\nint main(){char s[1005];scanf(\"%s\",s); for(int i=strlen(s)-1;i>=0;i--) putchar(s[i]); putchar('\\n');}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);String x=s.next(); System.out.println(new StringBuilder(x).reverse().toString());}}\n`,
    },
  },

  // 10) Count vowels
  {
    id: "vowels",
    title: "นับสระภาษาอังกฤษ",
    description: "รับสตริงตัวพิมพ์เล็กแล้วนับจำนวนสระ (a,e,i,o,u)",
    suggestedTimeSec: 45,
    tests: [{ in: "hello\n", out: "2\n" }, { in: "queue\n", out: "4\n" }],
    starter: {
      python: `s = input().strip()
# TODO: นับสระ aeiou
# print(sum(1 for c in s if c in "aeiou"))
`,
      c: `#include <stdio.h>
int main(){
    char s[2005]; if (scanf("%s", s)!=1) return 0;
    int cnt=0;
    // TODO: วนลูปนับสระ
    // for(int i=0;s[i];i++){ char ch=s[i]; if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') cnt++; }
    // printf("%d\\n", cnt);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner sc=new Scanner(System.in);
    String s=sc.next();
    int c=0;
    // TODO: วนลูปนับสระ
    // for(char ch: s.toCharArray()) if("aeiou".indexOf(ch)>=0) c++;
    // System.out.println(c);
  }
}
`,
    },
    solution: {
      python: `s=input().strip();print(sum(1 for c in s if c in 'aeiou'))\n`,
      c: `#include <stdio.h>\nint main(){char s[2005]; if(scanf(\"%s\",s)!=1) return 0; int c=0; for(int i=0;s[i];i++){char ch=s[i]; if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') c++;} printf(\"%d\\n\",c);} \n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner sc=new Scanner(System.in);String s=sc.next(); int c=0; for(char ch:s.toCharArray()) if(\"aeiou\".indexOf(ch)>=0)c++; System.out.println(c);}}\n`,
    },
  },

  // 11) Sort numbers
  {
    id: "sort-asc",
    title: "เรียงลำดับตัวเลข",
    description: "รับ n แล้วรับตัวเลขอีก n ตัว พิมพ์เรียงจากน้อยไปมากคั่นด้วยช่องว่าง",
    suggestedTimeSec: 60,
    tests: [{ in: "5\n4 2 8 1 3\n", out: "1 2 3 4 8\n" }],
    starter: {
      python: `n = int(input())
a = list(map(int, input().split()))
# TODO: เรียงแล้วพิมพ์
# a.sort()
# print(*a)
`,
      c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void* A, const void* B){
    long long x=*(const long long*)A, y=*(const long long*)B;
    return (x>y)-(x<y);
}
int main(){
    int n; scanf("%d",&n);
    long long a[n];
    for(int i=0;i<n;i++) scanf("%lld",&a[i]);
    // TODO: เรียงแล้วพิมพ์
    // qsort(a,n,sizeof(long long),cmp);
    // for(int i=0;i<n;i++){ if(i) printf(" "); printf("%lld",a[i]); }
    // printf("\\n");
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    int n=s.nextInt();
    long[] arr=new long[n];
    for(int i=0;i<n;i++) arr[i]=s.nextLong();
    // TODO: เรียงแล้วพิมพ์
    // Arrays.sort(arr);
    // StringBuilder sb=new StringBuilder();
    // for(int i=0;i<n;i++){ if(i>0) sb.append(' '); sb.append(arr[i]); }
    // System.out.println(sb);
  }
}
`,
    },
    solution: {
      python: `n=int(input());a=list(map(int,input().split()));a.sort();print(*a)\n`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint cmp(const void*a,const void*b){long long x=*(long long*)a,y=*(long long*)b; return (x>y)-(x<y);} int main(){int n;scanf(\"%d\",&n); long long a[n]; for(int i=0;i<n;i++) scanf(\"%lld\",&a[i]); qsort(a,n,sizeof(long long),cmp); for(int i=0;i<n;i++){ if(i) printf(\" \"); printf(\"%lld\",a[i]); } printf(\"\\n\");}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);int n=s.nextInt(); long[] arr=new long[n]; for(int i=0;i<n;i++) arr[i]=s.nextLong(); Arrays.sort(arr); StringBuilder sb=new StringBuilder(); for(int i=0;i<n;i++){if(i>0)sb.append(' '); sb.append(arr[i]);} System.out.println(sb);}}\n`,
    },
  },

  // 12) Second largest
  {
    id: "second-largest",
    title: "หาค่าอันดับสอง",
    description: "รับ n >=2 และตัวเลข n ตัว พิมพ์ค่ามากสุดอันดับสอง (ไม่มีค่าซ้ำทั้งหมด)",
    suggestedTimeSec: 70,
    tests: [{ in: "5\n4 9 1 7 3\n", out: "7\n" }],
    starter: {
      python: `n = int(input())
a = list(map(int, input().split()))
# TODO: หาค่าอันดับสอง (มั่นใจว่าไม่มีค่าซ้ำทั้งหมด)
# a = sorted(set(a))
# print(a[-2])
`,
      c: `#include <stdio.h>
int main(){
    int n; scanf("%d",&n);
    long long m1=-9e18, m2=-9e18, x;
    // TODO: อัปเดต m1 (มากสุด) และ m2 (มากสุดอันดับสอง)
    // for(int i=0;i<n;i++){ scanf("%lld",&x); if(x>m1){m2=m1; m1=x;} else if(x>m2 && x<m1){ m2=x; } }
    // printf("%lld\\n", m2);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    int n=s.nextInt();
    long m1=Long.MIN_VALUE, m2=Long.MIN_VALUE;
    // TODO: อัปเดต m1/m2
    // for(int i=0;i<n;i++){ long x=s.nextLong(); if(x>m1){m2=m1;m1=x;} else if(x>m2 && x<m1){m2=x;} }
    // System.out.println(m2);
  }
}
`,
    },
    solution: {
      python: `n=int(input());a=list(map(int,input().split()));a=sorted(set(a));print(a[-2])\n`,
      c: `#include <stdio.h>\nint main(){int n;scanf(\"%d\",&n); long long m1=-9e18,m2=-9e18,x; for(int i=0;i<n;i++){scanf(\"%lld\",&x); if(x>m1){m2=m1;m1=x;} else if(x>m2 && x<m1){m2=x;}} printf(\"%lld\\n\",m2);} \n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);int n=s.nextInt(); long m1=Long.MIN_VALUE,m2=Long.MIN_VALUE; for(int i=0;i<n;i++){long x=s.nextLong(); if(x>m1){m2=m1;m1=x;} else if(x>m2 && x<m1){m2=x;} } System.out.println(m2);}}\n`,
    },
  },

  // 13) Sum of digits
  {
    id: "digit-sum",
    title: "ผลรวมหลัก",
    description: "รับจำนวนเต็มไม่ลบ n แล้วพิมพ์ผลรวมของทุกหลัก",
    suggestedTimeSec: 40,
    tests: [{ in: "12345\n", out: "15\n" }, { in: "900\n", out: "9\n" }],
    starter: {
      python: `s = input().strip()
# TODO: รวมค่าทีละหลัก
# print(sum(int(c) for c in s))
`,
      c: `#include <stdio.h>
int main(){
    char s[1005]; scanf("%s", s);
    int sum=0;
    // TODO: รวมค่าทีละหลัก
    // for(int i=0;s[i];i++) if(s[i]>='0' && s[i]<='9') sum += s[i]-'0';
    // printf("%d\\n", sum);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    String x=s.next();
    int sum=0;
    // TODO: รวมค่าทีละหลัก
    // for(char c: x.toCharArray()) sum += c - '0';
    // System.out.println(sum);
  }
}
`,
    },
    solution: {
      python: `n=input().strip();print(sum(int(c) for c in n))\n`,
      c: `#include <stdio.h>\nint main(){char s[1005];scanf(\"%s\",s); int sum=0; for(int i=0;s[i];i++) if(s[i]>='0'&&s[i]<='9') sum+=s[i]-'0'; printf(\"%d\\n\",sum);} \n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);String x=s.next(); int sum=0; for(char c:x.toCharArray()) sum+=c-'0'; System.out.println(sum);}}\n`,
    },
  },

  // 14) LCM
  {
    id: "lcm",
    title: "หาค่า LCM",
    description: "รับ a b แล้วพิมพ์ค่าน้อยสุดที่หารด้วย a และ b ลงตัว",
    suggestedTimeSec: 50,
    tests: [{ in: "12 18\n", out: "36\n" }, { in: "7 5\n", out: "35\n" }],
    starter: {
      python: `a, b = map(int, input().split())
A, B = a, b
# TODO: หา gcd แล้วพิมพ์ A//gcd * B
# while b: a,b=b,a%b
# print(A//a*B)
`,
      c: `#include <stdio.h>
long long gcd(long long a,long long b){ while(b){ long long t=a%b; a=b; b=t; } return a; }
int main(){
    long long a,b; scanf("%lld %lld",&a,&b);
    // TODO: ใช้ gcd แล้วพิมพ์ lcm
    // long long d=gcd(a,b); printf("%lld\\n", a/d*b);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  static long gcd(long a,long b){ while(b!=0){ long t=a%b; a=b; b=t; } return a; }
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    long x=s.nextLong(), y=s.nextLong();
    // long d=gcd(x,y); System.out.println(x/d*y);
  }
}
`,
    },
    solution: {
      python: `a,b=map(int,input().split())\nA,B=a,b\nwhile b:a,b=b,a%b\nprint(A//a*B)\n`,
      c: `#include <stdio.h>\nlong long g(long long a,long long b){while(b){long long t=a%b;a=b;b=t;}return a;}int main(){long long a,b;scanf(\"%lld %lld\",&a,&b); long long d=g(a,b); printf(\"%lld\\n\", a/d*b);} \n`,
      java: `import java.util.*;class Main{static long g(long a,long b){while(b!=0){long t=a%b;a=b;b=t;}return a;} public static void main(String[]a){Scanner s=new Scanner(System.in);long x=s.nextLong(),y=s.nextLong(); long d=g(x,y); System.out.println(x/d*y);}}\n`,
    },
  },

  // 15) Multiplication table
  {
    id: "times-table",
    title: "แม่สูตรคูณ",
    description: "รับ n แล้วพิมพ์ 1..12 คูณ n (รูปแบบ: i x n = ผลลัพธ์) ทีละบรรทัด",
    suggestedTimeSec: 45,
    tests: [{ in: "3\n", out: "1 x 3 = 3\n2 x 3 = 6\n3 x 3 = 9\n4 x 3 = 12\n5 x 3 = 15\n6 x 3 = 18\n7 x 3 = 21\n8 x 3 = 24\n9 x 3 = 27\n10 x 3 = 30\n11 x 3 = 33\n12 x 3 = 36\n" }],
    starter: {
      python: `n = int(input())
# TODO: วน 1..12 พิมพ์รูปแบบ "i x n = i*n"
# for i in range(1, 13):
#     print(f"{i} x {n} = {i*n}")
`,
      c: `#include <stdio.h>
int main(){
    int n; scanf("%d",&n);
    // TODO: วน 1..12 พิมพ์ตามรูปแบบ
    // for(int i=1;i<=12;i++) printf("%d x %d = %d\\n", i, n, i*n);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    int n=s.nextInt();
    // for(int i=1;i<=12;i++) System.out.println(i+" x "+n+" = "+(i*n));
  }
}
`,
    },
    solution: {
      python: `n=int(input())\nfor i in range(1,13): print(f\"{i} x {n} = {i*n}\")\n`,
      c: `#include <stdio.h>\nint main(){int n;scanf(\"%d\",&n); for(int i=1;i<=12;i++) printf(\"%d x %d = %d\\n\", i,n,i*n);} \n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);int n=s.nextInt(); for(int i=1;i<=12;i++) System.out.println(i+\" x \"+n+\" = \"+(i*n));}}\n`,
    },
  },

  // 16) Celsius to Fahrenheit
  {
    id: "c2f",
    title: "แปลงองศา C เป็น F",
    description: "รับค่าทศนิยม C แล้วพิมพ์ F = C*9/5 + 32 (ทศนิยมตามการคำนวณ)",
    suggestedTimeSec: 35,
    tests: [{ in: "0\n", out: "32.0\n" }, { in: "100\n", out: "212.0\n" }],
    starter: {
      python: `c = float(input())
# TODO: พิมพ์ c*9/5 + 32
# print(c*9/5 + 32)
`,
      c: `#include <stdio.h>
int main(){
    double c; scanf("%lf",&c);
    // TODO: พิมพ์ c*9/5 + 32
    // printf("%g\\n", c*9/5+32);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    double c=s.nextDouble();
    // System.out.println(c*9/5+32);
  }
}
`,
    },
    solution: {
      python: `c=float(input());print(c*9/5+32)\n`,
      c: `#include <stdio.h>\nint main(){double c;scanf(\"%lf\",&c); printf(\"%g\\n\", c*9/5+32);}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);double c=s.nextDouble(); System.out.println(c*9/5+32);}}\n`,
    },
  },

  // 17) Count words
  {
    id: "word-count",
    title: "นับคำ",
    description: "รับหนึ่งบรรทัด (อาจมีช่องว่างหลายอัน) แล้วพิมพ์จำนวนคำ (แยกด้วยช่องว่าง)",
    suggestedTimeSec: 45,
    tests: [{ in: "hello world\n", out: "2\n" }, { in: "  a  b   c \n", out: "3\n" }],
    starter: {
      python: `import sys
line = sys.stdin.readline().rstrip("\\n")
# TODO: แยกด้วยช่องว่าง (หลายอัน) แล้วนับ
# print(len([x for x in line.split() if x]))
`,
      c: `#include <stdio.h>
#include <ctype.h>
int main(){
    char s[4005];
    if(!fgets(s,sizeof(s),stdin)) return 0;
    int inw=0, cnt=0;
    // TODO: นับคำด้วยการไล่เช็คช่องว่าง
    // for(int i=0;s[i];i++){ if(!isspace((unsigned char)s[i])){ if(!inw){cnt++; inw=1;} } else inw=0; }
    // printf("%d\\n", cnt);
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner sc=new Scanner(System.in);
    String line = sc.useDelimiter("\\\\A").hasNext()? sc.next() : "";
    // TODO: trim แล้ว split("\\\\s+") จากนั้นนับ
    // String t=line.trim();
    // System.out.println(t.isEmpty()?0:t.split("\\\\s+").length);
  }
}
`,
    },
    solution: {
      python: `import sys\ns=sys.stdin.readline().strip(); print(len([x for x in s.split() if x]))\n`,
      c: `#include <stdio.h>\n#include <ctype.h>\nint main(){char s[4005]; if(!fgets(s,sizeof(s),stdin)) return 0; int inw=0,cnt=0; for(int i=0;s[i];i++){ if(!isspace((unsigned char)s[i])){ if(!inw){cnt++; inw=1;} } else inw=0; } printf(\"%d\\n\",cnt);} \n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner sc=new Scanner(System.in); String line=sc.useDelimiter(\"\\\\A\").hasNext()?sc.next():\"\"; String[] parts=line.trim().split(\"\\\\s+\"); System.out.println(line.trim().isEmpty()?0:parts.length);}}\n`,
    },
  },

  // 18) Remove duplicates (preserve order)
  {
    id: "unique-order",
    title: "ลบค่าซ้ำ (คงลำดับเดิม)",
    description: "รับ n และ n ตัวเลข พิมพ์รายการที่ลบค่าซ้ำออกโดยคงลำดับเดิม",
    suggestedTimeSec: 60,
    tests: [{ in: "7\n1 2 2 3 1 4 3\n", out: "1 2 3 4\n" }],
    starter: {
      python: `n = int(input())
a = list(map(int, input().split()))
seen = set()
res = []
# TODO: ถ้ายังไม่เคยเจอให้เพิ่มใน res
# for x in a:
#     if x not in seen:
#         seen.add(x); res.append(x)
# print(*res)
`,
      c: `#include <stdio.h>
#include <stdbool.h>
int main(){
    int n; scanf("%d",&n);
    long long a[2005];
    for(int i=0;i<n;i++) scanf("%lld",&a[i]);
    // TODO: พิมพ์ค่าโดยไม่ซ้ำ (คงลำดับ)
    // for(int i=0;i<n;i++){ bool dup=false; for(int j=0;j<i;j++) if(a[j]==a[i]){dup=true;break;} if(!dup){ if(i){} printf(i?" %lld":"%lld",a[i]); } } printf("\\n");
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    int n=s.nextInt();
    LinkedHashSet<Long> set=new LinkedHashSet<>();
    for(int i=0;i<n;i++) set.add(s.nextLong());
    // TODO: พิมพ์ออกแบบคั่นด้วยช่องว่าง
    // StringBuilder sb=new StringBuilder(); boolean first=true;
    // for(long x:set){ if(!first) sb.append(' '); first=false; sb.append(x); }
    // System.out.println(sb);
  }
}
`,
    },
    solution: {
      python: `n=int(input());a=list(map(int,input().split()));seen=set();res=[]\nfor x in a:\n  if x not in seen: seen.add(x); res.append(x)\nprint(*res)\n`,
      c: `#include <stdio.h>\n#include <stdbool.h>\nint main(){int n;scanf(\"%d\",&n); long long a[2005]; for(int i=0;i<n;i++) scanf(\"%lld\",&a[i]); for(int i=0;i<n;i++){ bool dup=false; for(int j=0;j<i;j++) if(a[j]==a[i]){dup=true;break;} if(!dup){ if(i){} printf(i?\" %lld\":\"%lld\",a[i]); } } printf(\"\\n\");}\n`,
      java: `import java.util.*;class Main{public static void main(String[]a){Scanner s=new Scanner(System.in);int n=s.nextInt(); LinkedHashSet<Long> set=new LinkedHashSet<>(); for(int i=0;i<n;i++) set.add(s.nextLong()); StringBuilder sb=new StringBuilder(); boolean first=true; for(long x:set){ if(!first) sb.append(' '); first=false; sb.append(x);} System.out.println(sb);}}\n`,
    },
  },

  // 19) Power a^b
  {
    id: "pow-int",
    title: "ยกกำลัง a^b",
    description: "รับจำนวนเต็ม a,b (b >= 0) แล้วพิมพ์ a^b",
    suggestedTimeSec: 45,
    tests: [{ in: "2 10\n", out: "1024\n" }, { in: "5 0\n", out: "1\n" }],
    starter: {
      python: `a, b = map(int, input().split())
# TODO: ใช้ pow(a,b) หรือทำ fast power
# print(pow(a,b))
`,
      c: `#include <stdio.h>
long long fp(long long a,long long b){
    long long r=1;
    // TODO: ทำ fast power
    // while(b){ if(b&1) r*=a; a*=a; b>>=1; }
    return r;
}
int main(){ long long a,b; scanf("%lld %lld",&a,&b); /* printf("%lld\\n", fp(a,b)); */ return 0; }
`,
      java: `import java.util.*;
class Main{
  static long fp(long a,long b){
    long r=1;
    // TODO: ทำ fast power
    // while(b>0){ if((b&1)==1) r*=a; a*=a; b>>=1; }
    return r;
  }
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    long x=s.nextLong(), y=s.nextLong();
    // System.out.println(fp(x,y));
  }
}
`,
    },
    solution: {
      python: `a,b=map(int,input().split());print(pow(a,b))\n`,
      c: `#include <stdio.h>\nlong long fp(long long a,long long b){long long r=1; while(b){ if(b&1) r*=a; a*=a; b>>=1;} return r;} int main(){long long a,b;scanf(\"%lld %lld\",&a,&b); printf(\"%lld\\n\",fp(a,b));}\n`,
      java: `import java.util.*;class Main{static long fp(long a,long b){long r=1; while(b>0){if((b&1)==1) r*=a; a*=a; b>>=1;} return r;} public static void main(String[]a){Scanner s=new Scanner(System.in);long x=s.nextLong(),y=s.nextLong(); System.out.println(fp(x,y));}}\n`,
    },
  },

  // 20) Anagrams
  {
    id: "anagram",
    title: "เป็นอนาแกรมหรือไม่",
    description: "รับสตริง 2 ตัว (อักขระอังกฤษเท่านั้น) ถ้าจัดเรียงตัวอักษรแล้วเท่ากันให้พิมพ์ YES ไม่ใช่พิมพ์ NO (ไม่สนใจตัวพิมพ์เล็ก/ใหญ่)",
    suggestedTimeSec: 60,
    tests: [{ in: "Listen\nSilent\n", out: "YES\n" }, { in: "apple\npapel\n", out: "YES\n" }, { in: "rat\ncar\n", out: "NO\n" }],
    starter: {
      python: `a = input().strip().lower()
b = input().strip().lower()
# TODO: เทียบโดยการ sort แล้วเท่ากันหรือไม่
# print("YES" if sorted(a)==sorted(b) else "NO")
`,
      c: `#include <stdio.h>
#include <string.h>
#include <ctype.h>
int cmp(const void* A, const void* B){ return (*(const char*)A - *(const char*)B); }
int main(){
    char A[1005], B[1005];
    scanf("%s", A); scanf("%s", B);
    // TODO: แปลง lower ทั้งคู่แล้ว qsort เทียบ
    // for(int i=0;A[i];i++) A[i]=tolower(A[i]);
    // for(int i=0;B[i];i++) B[i]=tolower(B[i]);
    // qsort(A, strlen(A), 1, cmp); qsort(B, strlen(B), 1, cmp);
    // printf("%s\\n", strcmp(A,B)==0 ? "YES" : "NO");
    return 0;
}
`,
      java: `import java.util.*;
class Main{
  static String norm(String s){
    // TODO: toLowerCase + sort แล้วคืน string ใหม่
    // char[] c=s.toLowerCase().toCharArray();
    // Arrays.sort(c);
    // return new String(c);
    return s;
  }
  public static void main(String[]a){
    Scanner s=new Scanner(System.in);
    String x=s.next(), y=s.next();
    // System.out.println(norm(x).equals(norm(y))?"YES":"NO");
  }
}
`,
    },
    solution: {
      python: `a=input().strip().lower(); b=input().strip().lower(); print("YES" if sorted(a)==sorted(b) else "NO")\n`,
      c: `#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint cmp(const void*a,const void*b){return (*(char*)a-*(char*)b);} \nint main(){char A[1005],B[1005]; scanf(\"%s\",A); scanf(\"%s\",B); for(int i=0;A[i];i++) A[i]=tolower(A[i]); for(int i=0;B[i];i++) B[i]=tolower(B[i]); qsort(A,strlen(A),1,cmp); qsort(B,strlen(B),1,cmp); printf(\"%s\\n\", strcmp(A,B)==0?\"YES\":\"NO\");}\n`,
      java: `import java.util.*;class Main{static String norm(String s){char[] c=s.toLowerCase().toCharArray(); Arrays.sort(c); return new String(c);} public static void main(String[]a){Scanner s=new Scanner(System.in);String x=s.next(),y=s.next(); System.out.println(norm(x).equals(norm(y))?\"YES\":\"NO\");}}\n`,
    },
  },
];
