import {Ref, ref, reactive} from 'vue'

export function useRef() {
  //创建默认ref
  const msg: Ref = ref<string>('define value')
  //更新msg信息
  function updateMsg(text: string): void {
    msg.value = text
  }
  return {
    msg,
    updateMsg
  }
}

export function useReactive() {
  type IPerson = {
    name: string,
    age: number
  }
  const person:IPerson = reactive<IPerson>({
    name: 'lfz',
    age: 11
  })
  //更新person信息
  function updatePerson(name:string, age:number):void{
    person.name = name
    person.age = age
  }
  return {
    person,
    updatePerson
  }
}
