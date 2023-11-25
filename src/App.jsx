import { useEffect, useState } from 'react'
import Layout from './components/organisms/Layout'
import Button from './components/atoms/Button'
import Card from './components/atoms/Card'
import Modal from './components/atoms/Modal'
import { Flex, AutoComplete, Space, Divider, Empty, Form, Button as AntButton, Input as AntInput } from 'antd'
const boxStyle = { position: 'sticky', zIndex: 1, top: 0, backgroundColor: 'white', paddingBottom: 10, paddingTop: 18 };

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [idx, setIdx] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const onFinish = (values) => {
    let temporaryList = taskList;
    let taskObj = {};
    taskObj.value = values.title;
    taskObj.description = values.description;
    if (isEdit) {
      temporaryList[idx] = taskObj;
      localStorage.setItem("taskList", JSON.stringify(temporaryList));
    } else {
      temporaryList.push(taskObj);
      localStorage.setItem("taskList", JSON.stringify(temporaryList));
      setTaskList(temporaryList);
    }
    onReset();
  };
  const onReset = () => {
    setIsOpen(false);
    setIsEdit(false)
    setIdx(null);
    form.resetFields();

  };
  const handleFilter = (value) => {
    let tl = localStorage.getItem("taskList");
    let keybord = value;
    if (keybord !== "") {
      const filteredItems = JSON.parse(tl).filter((item) => {
        return item.value.toLowerCase().includes(keybord.toLowerCase());
      });
      setTaskList(filteredItems);
    } else {
      setTaskList(JSON.parse(tl));
    }
  };
  const HandleDeleteTaskList = (index) => {
    let temporaryList = taskList;
    temporaryList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(temporaryList));
    setTaskList(temporaryList);
    setIsDelete(!isDelete);
  };
  const onFill = (object, index) => {
    setIsOpen(true)
    setIsEdit(true)
    setIdx(index)
    form.setFieldsValue({
      title: object.value,
      description: object.description,
      id: index
    });
  };
  useEffect(() => {
    const storedItems = localStorage.getItem("taskList");
    if (storedItems) {
      setTaskList(JSON.parse(storedItems));
    }
  }, [isDelete]);
  return (
    <Layout>
      <div style={boxStyle}>
        <Flex vertical={false} justify='space-between'>
          <AutoComplete
            style={{
              width: 380,
            }}
            options={taskList}
            placeholder="search..."
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onSelect={handleFilter}
            onChange={(e) => handleFilter(e)}
          />
          <Button onClick={() => setIsOpen(true)} title={`+ Add Task`} type='primary' disabled={false} loading={false} size='default' />
        </Flex>
      </div>
      <Modal title="Add New Todo" open={isOpen} onOk={() => { }} onCancel={() => setIsOpen(false)}>
        <Divider />
        <Form
          name="control-hooks"
          labelCol={{
            flex: '110px',
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          style={{
            maxWidth: 600,
          }}
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <AntInput placeholder='Title...' allowClear />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <AntInput placeholder='Description...' allowClear />
          </Form.Item>
          <Divider />
          <Form.Item label=" ">
            <Space>
              <AntButton type="default" htmlType="button" onClick={() => setIsOpen(false)}>
                Cancel
              </AntButton>
              <AntButton type="primary" htmlType="submit">
                Submit
              </AntButton>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
      <Space direction="vertical" size="middle" style={{ display: 'flex', marginTop: '1rem' }}>
        {
          taskList && taskList.length > 0 ? (
            taskList.map((value, index) => {
              return (
                <Card
                  key={index}
                  title={value.value}
                  description={value.description}
                  onClickEdit={() => onFill(value, index)}
                  onClickDelete={() => HandleDeleteTaskList(index)}
                />
              )
            })
          ) : (<Empty />)
        }
      </Space>
    </Layout>
  )
}

export default App
