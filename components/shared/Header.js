import React from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes';

import '../../styles/mains.scss';

class Header extends React.Component {
    render() {
        const title = this.props.title;

        return (
            <React.Fragment>
                <p className='customClass'>{ title }</p>
                {this.props.children}
                <Link href='/'>
                <a > Home </a>
                </Link>

                <Link href='/about'>
                <a> About </a>
                </Link>

                <Link href='/portfolios'>
                <a> Portfolios </a>
                </Link>

                <Link href='/blogs'>
                <a> Blog </a>
                </Link>
                
                <Link href='/cv'>
                <a> CV </a>
                </Link>

                <NextLink route='/test/2'>
                    Test 2
                </NextLink>

                <NextLink route='test' params={{id: '5'}}>
                    Test 5    
                </NextLink>
            </React.Fragment>
        )
    }
}

export default Header;
 