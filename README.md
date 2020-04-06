# web_front
express.js lab assignment

##	关于数据库部分

• 用mysql来存储了用户信息，用户密码是加密之后放在数据库里

• 测试的时候，可以Sign In的邮件和密码：

| E-mail | Password |
|---|:---:|
`first1@gmail.com` | 11111
`second2@gmail.com` | 22222
`third3@gmail.com` | 33333
`fourth4@gmail.com` | 44444

•通过exampledb.sql代码需要生成数据库之后main.js里需要改的部分

• 临时用图片： src="image/firstteam_xxxx.png"， 放在./html/image里面放了

• 原本图片： data-src="${one}"， 放在mysql里，用blob形式来存储了。

• 原本图片加载的流程是从mysql拿到对应的blob数据，在main.js变到UML的形式。然后传给到img tag的data-src=" "里


##	关于工作量的内容

•	用Node.js(+Express)来实现了登录与注册功能，通过node main.js命令可以看main页。main页面URL是http://localhost:3000

  登录页与注册页是/:something的形式。在登录页与注册页submit之后，通过post方式到/SignIn_process或/SignUp_process。在/SignIn_process或/SignUp_process的时候，接近数据库拿或者放用户信息。然后用户信息在不在的条件下，redirect对应的/:something。

  如果登录成功的话的页面是这样。【 /SignIn -> /SignIn_process -> /User/:nickname 】 

  注册成功的话，需要再登录。【 /SignUp -> /SignUp_process -> /Succesed 】

•	用了hash方式（Express的crypto）来加密了用户的Password。（在/SignIn_process和/SignUp_process里使用了）

•	注册用户有效性检验：

    1.	要使用的邮件已经有或没有 (在main.js 里写了)
    
    2.	全部需要填空 (在SignUpPage.js 里写了)
    
    3.	密码的长度，跟密码确认一致性判断 (在SignUpPage.js 里写了)

• 因为在网络速度慢的情况下，加载容量大的视频和图片的时间会较长。
  对用户来看加载时间比较长的网页的话，会感受到这网页不是稳定的或不完整的。
  为了避免这样的问题，我使用的方法是用两张图来实现lazy load的方式。
  一个图是容量较大的原本图片（大概900KB左右）还有一个张是容量小的临时用图片（大概2KB左右）。
  首先，展开主页先把容量小的临时图片出现，然后一边完成加载原本图片。
  完成加载原本图片的时候，scroll down页面的话就会变成到原本图片。
  


