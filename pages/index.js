import MainLayout from '../layouts/MainLayout';
import Input from '../components/Input';
import Button from '../components/Button';
const HomePage = () => {
    return (
        <MainLayout>
            <img className='banner' src='/static/images/bg_banner.png' />
            <div className='search-container'>
                <div className='search'>
                    <Input icon='search' type='text' placeholder='Find somthing'/>
                    <Button>Search</Button>
                </div>
                <div className='ads-container'>
                    <div className='ads-block'>
                        <h3>Storage</h3>
                        <p className='text-mute'>
                            Keep your product data into database
                        </p>
                    </div>
                    <div className='ads-block'>
                        <h3>Accessible</h3>
                        <p className='text-mute'>
                            The product information can be easily accessed by anyone
                        </p>
                    </div>
                    <div className='ads-block'>
                        <h3>Data Analytics</h3>
                        <p className='text-mute'>
                            Any information can be used to analysed for further using
                        </p>
                    </div>
                </div>
                <div className='divider'>
                    <hr/>
                </div>
            </div>
            <style jsx>{`
                // .banner {
                //     width: 100%;
                // }
                .search-container {
                    text-align: center;
                    margin-top: -25px;
                }
                .search {
                    display: inline-flex;
                    align-items: center;
                    padding: 10px 20px;
                    background-color: rgb(248, 251, 251);
                    border-radius: 8px;
                    position: relative;
                }
                .icon {
                    margin-right: 5px;
                }
                .content {
                    height: 500px;
                    background-color: gray;
                }
                .ads-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 20%;
                }
                .ads-block {
                    text-align: center;
                    padding: 0 20px;
                    border-right: 1px solid #707070;
                    margin-top: 20px;
                }
                .ads-block:last-child {
                    border-right: none;
                }
                .divider {
                    padding: 10px 15%;
                    color: #707070;
                }
                .text-mute {
                    color: #7C7C7C;
                    font-weight: 300;
                }
            `}</style>
        </MainLayout>
    )
}

export default HomePage;