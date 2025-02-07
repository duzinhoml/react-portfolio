import React from 'react';
import Card from '../components/Card.jsx';

export default function Portfolio() {
    return(
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <Card img={'https://static.vecteezy.com/system/resources/previews/000/149/153/original/dojo-vector-illustration.png'} title={'Note Ninja'} link={'https://github.com/duzinhoml/note-ninja'} page={'https://duzinhoml.github.io/note-ninja/'} pageName={'Deployed App'}/>
            <Card img={'https://w.wallha.com/ws/1/zb7NOygp.jpg'} title={'Vehicle Factory'} link={'https://github.com/duzinhoml/vehicle-factory'}/>
            <Card img={'https://yepcode.io/docs/img/screenshots/processes-readme.png'} title={'ReadMe Generator'} link={'https://github.com/duzinhoml/readme-generator'}/>
            <Card img={'https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-employees-with-managers-at-work-or-management-team-on-a-circle-image_13300260.jpg'} title={'Employee Operator'} link={'https://github.com/duzinhoml/employee-operator'}/>
            <Card img={'https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D'} title={`Mathew's Portfolio`} link={'https://github.com/duzinhoml/mathew-portfolio'} page={'https://duzinhoml.github.io/mathew-portfolio/'} pageName={'Deployed App'}/>
            <Card img={'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'} title={'Horiseon Inc.'} link={'https://github.com/duzinhoml/bootcamp-hw-1'} page={'https://duzinhoml.github.io/bootcamp-hw-1/'} pageName={'Deployed App'}/>
        </div>
    );
};