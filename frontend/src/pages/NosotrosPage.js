import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
  return (
    <section className='holder'>
      <div classNAme='historia'>
        <h2>Historia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati perferendis id facilis quisquam! Accusamus dolores veritatis quasi non necessitatibus hic nemo voluptas voluptatibus. Deleniti sapiente impedit magnam, modi nesciunt quod illo sequi laboriosam quo debitis reiciendis maxime ab cumque laborum. Harum ipsa voluptate quas, numquam autem voluptatibus mollitia consequuntur.</p>
      </div>
      <h2>Staff</h2>
      <div className='personas'>
        <div className='persona'>
          <img src='../../images/nosotros/nosotros1.jpg' width='75' alt='Juan' />
          <h5>Juan Gomez</h5>
          <h6>Gerente General</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatum tempora at deserunt vero, praesentium dolorum dolor et illo laborum? Nam esse dolorum porro perspiciatis?</p>
        </div>
      </div>
    </section>
  )
}

export default NosotrosPage
