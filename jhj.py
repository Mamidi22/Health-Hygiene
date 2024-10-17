n=int(input())
l=list(map(int,input().split()))
l,r,i,search=map(int,input().split())
m=(l+r)//2
while(n>0):
    if(m[i]==search):
        print(m[i])
        if(m[i]>search): 
            l-=1
    else:
        r+=1
    
        
        
    
    
    
    