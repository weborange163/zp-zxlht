<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 8px;margin-bottom: 8px;margin-left: 22px;">
			<el-breadcrumb-item :to="{ path: '/' }">内容中心</el-breadcrumb-item>
			<el-breadcrumb-item>行业信息</el-breadcrumb-item>
			<el-breadcrumb-item>发布新闻资讯</el-breadcrumb-item>
		</el-breadcrumb>
		<div style="margin-left: 22px;margin-right: 22px;margin-bottom: 20px;overflow: hidden;background:rgba(255,255,255,1);border-radius:4px;box-shadow:0px 0px 0px rgba(54,88,167,0.07);">
						
						<div style="margin-top: 20px;margin-right: 88px; text-align: right;">
				    	<el-button size="small" @click="$router.back()" class="light_btn">返回</el-button>
				    	<el-button size="small" class="light_btn">预览</el-button>
				    	<el-button size="small" class="light_btn">保存</el-button>
				    	<el-button size="small" class="light_btn">保存并上线</el-button>
				    </div>
				    <el-form ref="form"  label-width="80px" :rules="rules" class="up_form">
							
				    <div style="width: 50%;float: left;padding:15px;">
							<el-form-item label="文章标题" prop="name" >
								<el-input v-model="form.name" placeholder="请输入标题"></el-input>
							</el-form-item>
				    	<quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  						</quill-editor>
				    </div>
					 <div style="width: 50%;float: left;padding:15px;">
				    	<el-form-item label="发布到:">
								<el-input :disabled="true" value="新闻资讯"></el-input>
							</el-form-item>
							<el-form-item label="来源:">
								<el-radio-group v-model="form.resource" required>
									<el-radio label="原创"></el-radio>
									<el-radio label="转载"></el-radio>
								</el-radio-group>
								<el-select v-model="form.source" placeholder="请选择来源" style="margin-left:20px;">
									<el-option label="第一网站" value="shanghai"></el-option>
									<el-option label="第二网站" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="作者:" :required="true">
								<el-input v-model="form.author"></el-input>
							</el-form-item>
							<el-form-item label="发布账号:">
								<el-select v-model="form.region" placeholder="请选择发布账号">
									<el-option label="小号1" value="shanghai"></el-option>
									<el-option label="小号2" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="附加选项:">
									<el-radio-group v-model="form.img">
										<el-radio label="上传缩略图"></el-radio>
										<el-radio label="提取第一个图为缩略图"></el-radio>
									</el-radio-group>
							</el-form-item>
							<el-form-item>
								<el-upload
									action="#"
									list-type="picture-card"
									:on-preview="handlePictureCardPreview"
									:on-remove="handleRemove">
									<i class="el-icon-plus"></i>
								</el-upload>
								<el-dialog :visible.sync="dialogVisible">
									<img width="100%" :src="dialogImageUrl" alt="">
								</el-dialog>
							</el-form-item>
				    </div>
				   </el-form>
				    
		</div>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				content:'',
				editorOption:{},
				dialogImageUrl: '',
        dialogVisible: false,
				form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
					desc: '',
					author:'',
					img:''
				},
				rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
			}
		},
		methods:{
			onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
			},
			handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
		}
	}
</script>
<style type="text/css">
	
	.up_form .el-input__inner{
		height: 30px;
		line-height: 30px;
		max-width: 300px;
	}
	.up_form .quill-editor .ql-container{
		min-height: 500px;
	}
</style>