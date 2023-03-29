import './category-item.styles.scss'

const CategoryItem = ({category}) => {

    const {title, imageUrl, links} = category
    return(
    <div className='category-container'>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
            <a href='www.google.com'>{links}</a>
        </div>
    </div>
    )
}

export default CategoryItem;