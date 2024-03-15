#include<studio.h>
int main{
    int num, k =1,sum=0;
    printf("Enter the number : %d",num);
    scanf("%d",&num);
    while(num!=0){
        k=num%10;
        sum=sum+k;
        k=num/10;
        num =k;
    }
    printf("sum of the digit is: %d",sum);
    return 0;
}