

// customise the colors here

var color = [{
  HeigthIndicatorColor: "gold",
  LateralIndicatorColor: "gold",
  TextColor: "dark_green",
  HeigthIndicatorTextColor: "yellow",
  LateralIndicatorTextColor: "yellow"
}]

// customise range here
// the more bigger the detection range
// the higher cpu will be used
// may cause lag, keep it bettween 3 ~ 7

const setup = [{
  BlockScanRange: "3",
  // if you wish to execute those on a specific user
  // or target it on a specific group, change this value
  TargetUser:"@a",
  TargetBlock: "minecraft:diamond_ore",
  TargetBlockName: "diamond",

}]

//customise the text

const text = [{
  MainText: `The ${setup[0].TargetBlockName} is `,
  BlockNearText: "block near ",
  BlockBelowText: "block below ",
  BlockHeigthText: "block heigth "
}]

// the process

var titledisplaysamlpe = `/title ${setup[0].TargetUser} actionbar ["",{"text":"The diamond is ","color":"${color[0].TextColor}"},{"text":"N ","color":"${color[0].LateralIndicatorColor}"},{"text":"block near ","color":"${color[0].LateralIndicatorTextColor}"},{"text":"Y ","color":"${color[0].HeigthIndicatorColor}"},{"text":"block below","color":"${color[0].HeigthIndicatorTextColor}"}]`



console.log("##### only copy content below #####")
var arr = [];
function positiveCmd(args) {
  for (var z = 0; z < setup[0].BlockScanRange; z++) {
    for (var i = 0; i < setup[0].BlockScanRange; i++) {
      for (var j = 0; j < setup[0].BlockScanRange; j++) {
      var n1 = i
      var n2 = j
      var n3 = z
      var sum = i + z / 2 + 1
      var cmd1 = `/execute at ${setup[0].TargetUser} run execute if block ~${n1} ~${n2} ~${n3} ${setup[0].TargetBlock} run title ${setup[0].TargetUser} actionbar ["",{"text":"${text[0].MainText}","color":"${color[0].TextColor}"},{"text":"${sum} ","color":"${color[0].LateralIndicatorColor}"},{"text":"${text[0].BlockNearText}","color":"${color[0].LateralIndicatorTextColor}"},{"text":"${n2} ","color":"${color[0].HeigthIndicatorColor}"},{"text":"${text[0].BlockHeigthText}","color":"${color[0].HeigthIndicatorTextColor}"}]`
      // clean
      var pr = `/execute at ${setup[0].TargetUser} run execute if block ~-${n1} ~-${n2} ~-${n3} minecraft:diamond_ore run title ${setup[0].TargetUser} actionbar ["",{"text":"${text[0].MainText}","color":"${color[0].TextColor}"},{"text":"${sum} ","color":"${color[0].LateralIndicatorColor}"},{"text":"${text[0].BlockNearText} ","color":"${color[0].LateralIndicatorTextColor}"},{"text":"${n2} ","color":"${color[0].HeigthIndicatorColor}"},{"text":"${text[0].BlockBelowText}","color":"${color[0].HeigthIndicatorTextColor}"}]`
      arr.push(pr)
      arr.push(cmd1)
      var arrlength = arr.length
      console.log(`/setblock ~ ~ ~-${arr.length - 1} minecraft:repeating_command_block[conditional=false,facing=east]{conditionMet:0b,auto:1b,CustomName:'{"text":"@"}',powered:0b,Command:'${pr}',SuccessCount:0,TrackOutput:1b,UpdateLastExecution:1b}`)
      console.log(`/setblock ~ ~ ~-${arr.length} minecraft:repeating_command_block[conditional=false,facing=east]{conditionMet:0b,auto:1b,CustomName:'{"text":"@"}',powered:0b,Command:'${cmd1}',SuccessCount:0,TrackOutput:1b,UpdateLastExecution:1b}`)
      
      }
    }   
  }
}
function negativeCmd(args) {}
function compileToCommandBlock(args) {}



console.log(titledisplaysamlpe)

positiveCmd()

var sample = `/setblock 17 4 9 minecraft:repeating_command_block[conditional=false,facing=east]{conditionMet:0b,auto:0b,CustomName:'{"text":"@"}',powered:0b,Command:"",SuccessCount:0,TrackOutput:1b,UpdateLastExecution:1b}`
