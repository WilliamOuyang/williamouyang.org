import Navbar2 from '@/pagecomponents/shared/Navbar2'
import Vaultdb from '@/pagecomponents/vaultcomponents/Vaultdb'

const Vault = () => {
  return (
    <div>
        <Navbar2/>
        <div style={{marginTop:'150px'}}>
        <Vaultdb/>
        </div>

    </div>
  )
}

export default Vault