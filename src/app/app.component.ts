import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public files: any = [];
  public allowedFiles = ['csv', 'xls', 'docx', 'jpg', 'pdf', 'pptx']
  public max_size = 10485760

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element: File = event[index];
      const ext = element.name.substr(element.name.lastIndexOf('.') + 1, element.name.length)
      const flag_ext = !this.allowedFiles.includes(ext)
      const flag_size = element.size > this.max_size

      element['flag_ext'] = flag_ext
      element['flag_size'] = flag_size

      this.files.push(element)
    }  
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }  

  formatSize(size: number): string {
    let size_str: string = `${size} Bytes`

    if (size >= 1024 && size < 1048576) {
      size_str = `${(size / 1024).toFixed(2)}KB`
    }

    if (size >= 1048576) {
      size_str = `${(size / 1048576).toFixed(2)}MB`
    }

    return size_str
  }
}
