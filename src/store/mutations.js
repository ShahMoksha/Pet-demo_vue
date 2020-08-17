export default {
  appendPet: (state, {
    species,
    pet
  }) => {
    state[species].push(pet)
  }
}
// what is mutation actions ans state |||| submit.prevent?
