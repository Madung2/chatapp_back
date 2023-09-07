const MessageModel = (sequelize: any, DataTypes: any) => {
    const Message = sequelize.define('Message', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        ipAddress: { // 사용자 IP 주소
          type: DataTypes.STRING,
        },
        content: { // 메시지 내용
          type: DataTypes.STRING,
        },
        timestamp: { // 메시지 작성 시간
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        }
    });
    return Message;
}

export default MessageModel;
