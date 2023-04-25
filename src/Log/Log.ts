export class LogContral{
  // 是否开启log
  public static CanLog:boolean = true;
  // 提示log关闭的标记
  public static Flag_tip_closed:boolean = false;
  
}

export function Log(message?: any, ...optionalParams: any[]){
  if(LogContral.CanLog){
    console.log(message,...optionalParams);
  }else{
    if(!LogContral.Flag_tip_closed){
      LogContral.Flag_tip_closed = true;
      console.log('log closed');
    }
  }
}
