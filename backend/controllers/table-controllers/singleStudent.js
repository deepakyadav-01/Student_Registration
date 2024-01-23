import Student from '../../model/Student.js';

export const getSingleStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const studentDetails = await Student.findById(studentId);

    if (!studentDetails) {
      return res.status(404).json({
        success: false,
        message: 'student not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Single student details retrieved successfully',
      FormData: studentDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error while retrieving student details',
      error,
    });
  }
};
