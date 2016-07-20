import React from 'react'

export default function log (target, name, descriptor) {
  var oldValue = descriptor.value

  descriptor.value = function () {
    console.log(`Calling "${name}" with`, arguments)

    return oldValue.apply(null, arguments)
  }

  return descriptor
}
