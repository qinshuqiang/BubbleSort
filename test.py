test = [0,0,1564,7,1,25,44,1,58,771,12,45,55,1,4,6,9,7,48,4,7,1,5,7,4]
n = len(test)
count = 0
for j in range(n-1):
    for i in range(0,n - 1 -j):
        if test[i] > test[i+1]:
            test[i],test[i+1] = test[i+1],test[i]
            count=count+1
    if 0 == count:
        break
print(count)       
print(test)