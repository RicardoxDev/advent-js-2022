function executeCommands(commands) {
  let cpu = [0, 0, 0, 0, 0, 0, 0, 0]

  let cmd = {
    MOV: (x) => {
      let mov = x.split(",")[0].split(" ")[1]
      cpu[+x.at(-1)] = +mov;
      (mov.startsWith("V") && (cpu[+x.at(-1)] = cpu[+mov.at(-1)]));
    },
    ADD: (x) => {
      let v1 = +x.split(",")[0].at(-1)
      let v2 = +x.split(",")[1].at(-1)
      cpu[v1] = (cpu[v1] + cpu[v2]) % 256
    },
    INC: (x) => {
      cpu[+x.at(-1)] = (cpu[+x.at(-1)] + 1) % 256
    },
    DEC: (x) => {
      cpu[+x.at(-1)] = (((cpu[+x.at(-1)] - 1) % 256) + 256) % 256
    },
    JMP: (x) => {
      commands = commands
        .concat(
          commands.slice(+x.split(" ").at(-1),
            (commands.indexOf(x) + 1) * !!cpu[0])
        )
    }
  }

  for (let i = 0; i < commands.length; i++) {
    cmd[commands[i].split(" ")[0]](commands[i])
  }

  return cpu
}


console.log(
  executeCommands([
    'MOV 10,V00',
    'MOV V00,V01',
    'MOV V01,V02',
    'MOV V02,V03',
    'MOV V03,V04'
  ])
)