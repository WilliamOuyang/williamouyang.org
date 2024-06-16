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
          <iframe src="imap.gmx.net" style={{width: "800px", height: "800px"}}></iframe>


    </div>
  )
}

export default Vault