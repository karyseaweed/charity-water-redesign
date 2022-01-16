const FooterItem = ({ item, url }) => {
  return <li className='mb-6'><a href={url} target='_blank'>{item}</a></li>
}
  
export default FooterItem