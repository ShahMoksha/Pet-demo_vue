import dogs from '../data/dogs'
import cats from '../data/cats'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}
