<template>
  <div class="truestee-container">
    <div class="form-area">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="托管人名称">
          <el-input v-model="formInline.searchOrgName" placeholder="托管人名称" />
        </el-form-item>
        <el-form-item label="托管人代码">
          <el-input v-model="formInline.searchOrgId" placeholder="托管人代码" />
        </el-form-item>
        <el-form-item label="审核状态" prop="searchCheck">
          <el-select v-model="formInline.searchCheck" placeholder="审核状态">
            <el-option 
              v-for="item in checkOptions" 
              :key="item.id" 
              :label="item.keyName"
              :value="item.keyId"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div class="btn-areas">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="onReset">重置</el-button>
      </div>
    </div>
    <div class="table-area">
      <div class="table-btn">
        <el-button link type="primary">新增</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button  
              link
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">
              审核
            </el-button>
            <el-button  
              link
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">
              编辑
            </el-button>
            <el-button
              link
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="orgId" label="托管人代码"/>
        <el-table-column prop="orgName" label="托管人名称"/>
        <el-table-column prop="orgSname" label="托管人简称" />
        <el-table-column prop="checkName" label="审核人" />
        <el-table-column prop="mdfyPrsn" label="修改人" />
        <el-table-column prop="createPrsn" label="创建人" />
      </el-table>
    </div>
  </div>
</template>

<!-- 语法糖，setup script -->
<script setup lang="ts" name="truestee">
import { reactive, ref } from 'vue'
import { fetchData, getCheckData } from '../../api/trustee';

interface TableItem {
  id: number,
  orgId: string,
  orgName: string,
  orgSname: string,
  checkName: string,
  mdfyPrsn: string,
  createPrsn: string,
}

interface optionItem {
  id: string,
  keyName: string,
  keyId: string
}


const tableData = ref<TableItem[]>([])
const checkOptions = ref<optionItem[]>([])

const formInline = reactive({
  searchOrgName: '',
  searchOrgId: '',
  searchCheck: '',
})

//获取下拉框数据
const getData = (data: any) => {
	fetchData(data).then((res:any) => {
		tableData.value = res.data.data;
    console.log(tableData.value)
	});
};
getData({});

// 获取表格数据
const checkData = () => {
	getCheckData().then((res:any) => {
		checkOptions.value = res.data;
    console.log(checkOptions.value)
	});
};
checkData();

const onSubmit = () => {
  const parmas = {
    searchOrgName: formInline.searchOrgName,
    searchOrgId: formInline.searchOrgId,
    searchCheck: formInline.searchCheck,
  }
  getData(parmas)
}

const onReset = () => {
  formInline.searchOrgName = ''
  formInline.searchOrgId = ''
  formInline.searchCheck = ''
  getData({})
}

const handleEdit = (index: number, row: TableItem) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: TableItem) => {
  console.log(index, row)
}

</script>

<style scoped lang="scss">
  .truestee-container {
    padding: 20px;
    background: #fff;
    .form-area {
      background: #F5F6FA;
      padding: 10px 20px;
      .btn-areas {
        display: flex;
        justify-content: flex-end;
        padding-top: 20px;
        .el-button {
          width: 60px;
        }
      }
      
    }

    .table-area {
      padding-top: 20px;
      .table-btn {
        display: flex;
        justify-content: flex-end;
        .el-button {
          width: 60px;
          height: 24px;
          margin-bottom: 4px;
        }
      }
    }
  }
  .el-select-dropdown__item {
    padding-left: 20px !important;
  }
</style>