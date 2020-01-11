const regionContainer = document.getElementById('regions-container')
const characterContainer = document.getElementById('characters-container')

const regions = [
  { name: 'noxus' },
  { name: 'demacia' },
  { name: 'ionia' },
  { name: 'shadow isles' },
  { name: 'freljord' },
  { name: 'shurima' },
  { name: 'the void' },
  { name: 'targon' },
  { name: 'zaun' },
  { name: 'bandle city' },
  { name: 'bilgewater' },
  { name: 'ixtal' },
  { name: 'piltover' }
]

const renderRegionList = () => {
  list = []
  regions.forEach(region => {
    let regionBox = document.createElement('div')
    regionBox.classList.add('region-box')
    let el = document.createElement('a')
    el.setAttribute('href', `#${region.name}`)
    el.innerText = region.name
    regionBox.append(el)
    regionContainer.append(regionBox)
  })
}

renderRegionList()