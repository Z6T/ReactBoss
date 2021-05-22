export interface Iresponse<T>{
    message: string,
    code: number,
    result:T
}


export default function():Promise<Iresponse<number[]>>{
    return new Promise((resolve)=>{
        setTimeout(() => {
          resolve({
              message:'hello',
              code: 0,
              result:[1,2,3]
          })
        }, 1000)
        
    })
}