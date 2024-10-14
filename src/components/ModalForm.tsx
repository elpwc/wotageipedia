import { FormInstance, Form, Modal } from 'antd';
import { useRef, useEffect } from 'react';

interface ModalFormProps {
  title: string;
  visible: boolean;
  onSubmit: (values: any) => void;
  onSubmitFailed?: (values: any) => void;
  onCancel: (error: any) => void;
  items: ModalFormItem[];
  okButtonTitle?: string;
  cancelButtonTitle?: string;
}
interface ModalFormItem {
  name: string;
  label: string;
  rules?: any;
  child: JSX.Element;
}

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible, items }: { form: FormInstance; visible: boolean; items: ModalFormItem[] }) => {
  const prevVisibleRef = useRef<boolean>();
  const prevItemsRef = useRef<ModalFormItem[]>();
  useEffect(() => {
    prevVisibleRef.current = visible;
    prevItemsRef.current = items;
  }, [visible, items]);
  const prevVisible = prevVisibleRef.current;
  const prevItems = prevItemsRef.current;

  useEffect(() => {
    if ((!visible && prevVisible) || (!items && prevItems)) {
      form.resetFields();
    }
  }, [visible, items]);
};

const ModalForm: React.FC<ModalFormProps> = ({ title, visible, onSubmit, onCancel, onSubmitFailed, items, okButtonTitle, cancelButtonTitle }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
    items,
  });

  const onDone = () => {
    form.submit();
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onDone}
      onCancel={onCancel}
      okText={okButtonTitle ? okButtonTitle : 'OK'}
      cancelText={cancelButtonTitle ? cancelButtonTitle : 'Cancel'}
      destroyOnClose={true} // important
    >
      <Form size="small" labelCol={{ span: 4 }} form={form} layout="horizontal" name="userForm" onFinish={onSubmit} onFinishFailed={onSubmitFailed}>
        {items.map((item: ModalFormItem) => {
          return (
            <Form.Item name={item.name} label={item.label} rules={item.rules}>
              {item.child}
            </Form.Item>
          );
        })}
      </Form>
    </Modal>
  );
};

export default ModalForm;
