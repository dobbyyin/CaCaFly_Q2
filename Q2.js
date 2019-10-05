
//執行時，ｄｏｇｅｔ　ｆｕｎｃｔｉｏｎ　會被呼叫
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}
 //執行上傳動作時,  server 端的動作
function uploadFiles(form) {
  
  try {
    
    //---請將「上傳資料夾」修改為要存放的資料夾名稱----
    var dropbox = "３"; 
    //----------------------------------------------
    var folder, folders = DriveApp.getFoldersByName(dropbox), i=0;
    
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
   
    
       
    var blob1 = form.myFile1;    
    if(blob1.length >0)
    {
      var file1 = folder.createFile(blob1);    
      file1.setDescription( form.myName);
      i++;
    }

    var blob2 = form.myFile2;    
    if(blob2.length >0)
    {
      var file2 = folder.createFile(blob2);    
      file2.setDescription(form.myName);
      i++;
    }
    
    var blob3 = form.myFile3; 
    if(blob3.length > 0)
    {
      var file3 = folder.createFile(blob3);    
      file3.setDescription(form.myName);
      i++;
    }
    

    
    
  
    return "檔案上傳成功！ 一共上傳了 "  + i + " 個檔案";
    
  } catch (error) {
    
    return error.toString();
  }
  
}