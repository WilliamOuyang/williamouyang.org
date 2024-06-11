import Navbar2 from '@/pagecomponents/shared/Navbar2'
import Vaultdb from '@/pagecomponents/vaultcomponents/Vaultdb'
import { useEffect } from 'react';

const Vault = () => {

  useEffect(() => {
    document.title = "Vault | williamouyang.org"
  }, []);

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