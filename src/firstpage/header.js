export class Header extends React.Component {
  render(){
    return (
        <div class="container">
          <div class="header-left">
            <img class="logo" src="https://prog-8.com/images/html/advanced/main_logo.png" />
          </div>
          <span class="fa fa-bars menu-icon"></span>

          <div class="header-right">
            <a href="#">OurVision</a>
            <a href="#">OurWorks</a>
            <a href="#">F&Q</a>
          </div>
        </div>
    )
  }
}