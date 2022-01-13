const FooterItem = ({ item, url }) => {
  return (
    <li className='mr-12 my-1 flex items-center'>
      <a className='hover:text-ltgold' href={url} target='_blank'>{item}</a>
    </li>
  )
 }
  
 export default FooterItem