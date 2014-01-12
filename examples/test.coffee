Cylon = require 'cylon'

Cylon.robot
  device: { name: 'keyboard', driver: 'keyboard' }
  connection: { name: 'keyboard', adaptor: 'keyboard' }
  work: (my) ->
    my.keyboard.on 'up', (key) ->
      console.log "UP!"

    my.keyboard.on 'down', (key) ->
      console.log "DOWN!"

    my.keyboard.on 'left', (key) ->
      console.log "LEFT!"

    my.keyboard.on 'right', (key) ->
      console.log "RIGHT!"
.start()
