# 1. ʹ��React���ּܴ���һ��ReactӦ��
## 1). react���ּ�
	1. xxx���ּ�: ������������Ա���ٴ���һ������xxx���ģ����Ŀ
		* ������������Ҫ������
		* ָ���������е�����
		* ����ֱ�Ӱ�װ/����/����һ����Ч��
	2. react�ṩ��һ��ר�����ڴ���react��Ŀ�Ľ��ּܿ�: create-react-app
	3. ��Ŀ�����弼���ܹ�Ϊ: react + webpack + es6  + babel + eslint
## 2). ������Ŀ������
	npm install -g create-react-app
	create-react-app react-app
	cd react-app
	npm start
## 3). ʹ�ý��ּܿ�������Ŀ���ص�
	ģ�黯: js��һ��һ��ģ���д��
	�����: �������ɶ�������ϱ�дʵ�ֵ�
	���̻�: ʵ�����Զ�����/����/�������Ŀ
## 4). �������д��Ŀ������
	������
	ʵ�־�̬���--->��̬ҳ��
	ʵ�ֶ�̬���
		��̬��ʾ��ʼ������
		����

# 2. app1: ʵ��һ�����۹�����
## 1). ������:
	Ӧ�����: App
	����������: CommentAdd
	���������: CommentItem
	�����б����: CommentList
## 2). ȷ�������state��props:
	App: 
		* state: comments/array
	CommentAdd
		* state: username/string, content/string
		* props: add/func
	commentList
	  	* props: comments/array, delete/func
	CommentItem
		* props: comment/object, delete/func, index/number
## 3). ��д��̬���
	���ҳ��
	���css
## 4). ʵ�ֶ�̬���
	1. ��̬չʾ��ʼ������
	  * ��ʼ��״̬����
	  * ������������
	2. ��Ӧ�û�����, �����������
	  * ���¼�����, ������
	  * ����state

# 3. app2: ʵ��github�û���������
## 1). reactӦ���е�ajax����
	axios: ��װXMLHttpRequest����, promise���, ֧�������/node��������
	fetch: ����������﷨, promise���, ���������֧��, ��������fetch.js���ݰ�
## 2). ������
    App
		* state: searchName/string
    Search
      	* props: setSearchName/func
    List
      	* props: searchName/string
      	* state: firstView/bool, loading/bool, users/array, errMsg/string
## 3). ��д���
	��д��̬���
	��д��̬���
		componentWillReceiveProps(nextProps): ���ӽ��յ��µ�props, ����ajax
		ʹ��axios�ⷢ��ajax����

# 4. �����ͨ���ܽ�
## 1). ��ʽһ: ͨ��props����
	��ͬ�����ݷ��ڸ������, ���е����ݷ����Լ�����ڲ�(state)
	һ������-->������������ݸ������-->�������ȡ����
	��������-->������������ݸ������-->��������ú���
	����: ��㴫�������鷳, �ֵ����ͨ�Ų�����
	
## 2). ��ʽ��: ʹ����Ϣ����(subscribe)-����(publish)����: �Զ����¼�����
	���߿�: PubSubJS
	����: npm install pubsub-js --save
	ʹ��: 
	  import PubSub from 'pubsub-js' //����
	  PubSub.subscribe('delete', function(msg, data){ }); //����
	  PubSub.publish('delete', data) //������Ϣ
	�ŵ�: ����֧�������ϵ���֮���ͨ��

## 3). �¼��������
	1. DOM�¼�
		* ���¼�����
			* �¼���(����): ֻ�����޵ļ���, �������д
			* �ص�����
		* �û����������¼�(event)
			* �¼���(����)
			* ����
	2. �Զ����¼�
		* ���¼�����
			* �¼���(����): ����
			* �ص�����: ͨ���βν�������, �ں����崦���¼�
		* �����¼�(����)
			* �¼���(����): ��󶨵��¼��������¼���һ��
			* ����: ���Զ����ݸ��ص�����
      
# 5. ES6���﷨�ܽ�
	�������/����: const/let
	�⹹��ֵ: let {a, b} = this.props   import {aa} from 'xxx'
	����ļ����: {a, b}
	��ͷ����: 
		������Զ��巽��: xxx = () => {}
		map/filter�Ļص�����: (item, index) => {}
		�ŵ�:
			* ���
			* û���Լ���this,ʹ������this���ҵ����ⲿthis
	��չ�����: ...
		������:  const MyProps = {}, <Xxx {...MyProps}>
	��: class/extends/constructor/super
	ES6ģ�黯: export default | import

# 6. ��Ŀ�������
	npm run build  //���ɴ���ļ�
	npm install -g serve  //ȫ�����ط�������
	serve build  //ͨ���������������д����Ŀ
	����: http://localhost:5000  //���������
